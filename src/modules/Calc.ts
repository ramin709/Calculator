

export enum InputType {
    Number, Operation
}

export enum operatorType { Add = 'add', Sub = 'sub', Equal = 'equal', }
export type Operation = {
    operator: operatorType,
    value: number
}

export type OperationBuilder = {
    operations: Operation[],
    working: Operation;
}

export type CalcInput = { type: InputType.Number, value: number } | { type: InputType.Operation, operator: operatorType }

export type CalcOutput = { displayValue: number }

const getOperation = (inputs: CalcInput[]): Operation[] => {
    const builder: OperationBuilder = inputs.reduce<OperationBuilder>((builder, input): OperationBuilder => {
        switch (input.type) {
            case InputType.Number:
                const previous = builder.working?.value || 0;
                const newValue = previous * 10 + input.value;
                return { ...builder, working: { ...builder.working, value: newValue } }

            case InputType.Operation:
                if (input.operator === operatorType.Equal) {
                    return { operations: [...builder.operations, builder.working, { operator: operatorType.Equal, value: 0 }], working: { operator: operatorType.Add, value: 0 } }

                } else {
                    return { operations: [...builder.operations, builder.working], working: { operator: input.operator, value: 0 } }
                }
        }
    }, { operations: [], working: { operator: operatorType.Add, value: 0 } })

    return builder.operations;
}

const getState = (inputs: Array<CalcInput>): CalcOutput => {
    return { displayValue: 0 }
}

const Calc = {
    getState,
    getOperation
}

export default Calc