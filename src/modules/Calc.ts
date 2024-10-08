

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

const getTotal = (operations: Operation[]): number => {
    const total:number = operations.reduce<number>((sum:number , operation: Operation) => {
        switch (operation.operator) {
            case operatorType.Add:
                return sum + operation.value;
            case operatorType.Sub:
                return sum - operation.value;
            case operatorType.Equal:
                return sum;
            default: 
                return sum;
        }
    } , 0);

    return total;
}

const getState = (inputs: Array<CalcInput>): CalcOutput => {
    const builder = getOperationBuilder(inputs);
    const operations: Operation[]= builder.operations;
    const lastOperation = operations ? operations[operations.length - 1] : null;
    const lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
    const total = getTotal(operations);


    if(!lastOperation) return {displayValue : builder.working.value}

    switch (lastOperation.operator) {
        case operatorType.Equal:
            return {displayValue : total}
    
        default:
            return {displayValue: lastInput?.type === InputType.Number? builder.working.value : total}
    }
  
}

const Calc = {
    getState,
    getOperationBuilder
}

export default Calc