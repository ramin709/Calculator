

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

const getOperationBuilder = (inputs: CalcInput[]): OperationBuilder => {
    return inputs.reduce<OperationBuilder>((builder, input): OperationBuilder => {
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
}

const getState = (inputs: Array<CalcInput>): CalcOutput => {
    const builder = getOperationBuilder(inputs);
    const operations: Operation[]= builder.operations;
    const lastOperation = operations ? operations[operations.length - 1] : null;

    if(!lastOperation) return {displayValue : 0}

    switch (lastOperation.operator) {
        case operatorType.Equal:
            const total = operations.reduce((sum , operation) => sum + operation.value , 0);
            return {displayValue : total}
    
        default:
            return {displayValue: builder.working.value}
    }
  
}

const Calc = {
    getState,
    getOperationBuilder
}

export default Calc