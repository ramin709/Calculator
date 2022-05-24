

export enum InputType {
    Number, Operation
}

export enum operatorType {Add , Sub , Equal}
export type Operation = {
    operator: operatorType,
    value: number
}

export type OperationBuilder = {
    operations: Operation[],
    working: Omit<Operation , 'operation'> | null;
}

export type CalcInput = {type: InputType.Number , value: number} | {type: InputType.Operation , operator: operatorType}

export type CalcOutput = {displayValue: number}

const getOperation = (inputs: CalcInput[]): Operation[] => {
    const builder = inputs.reduce((build , input): OperationBuilder[] => {
        switch (input.type) {
            case InputType.Number:
                const previous = build.working?.value;
        }
    } , {operations: [] , working: null} as OperationBuilder)
}

const getState = (inputs: Array<CalcInput>):CalcOutput => {
    return {displayValue: 0}
}

const Calc = {
    getState
}

export default Calc