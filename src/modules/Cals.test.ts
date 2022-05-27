import '@testing-library/react'
import { CalcInput, InputType, Operation, operatorType } from './Calc'
import Calc from './Calc'

test('generate operations', () => {
    const inputs: CalcInput[] = [
        { type: InputType.Number, value: 1 },
        { type: InputType.Number, value: 2 },
        { type: InputType.Operation, operator: operatorType.Add },
        { type: InputType.Number, value: 3 },
        { type: InputType.Operation, operator: operatorType.Equal }
    ]

    const operations: Operation[] = [
        {operator: operatorType.Add, value: 12},
        {operator: operatorType.Add, value: 3},
        {operator: operatorType.Equal, value: 0},
    ]

    expect(Calc.getOperation(inputs)).toEqual(operations);
})


/* test('derive state', () => {
    const inputs: CalcInput[] = [
        { type: InputType.Number, value: 1 },
        { type: InputType.Number, value: 2 },
        { type: InputType.Operation, operator: operatorType.Add },
        { type: InputType.Number, value: 3 },
        { type: InputType.Operation, operator: operatorType.Equal }
    ]

    const result = Calc.getState(inputs)

    expect(result.displayValue).toEqual(15);
}) */