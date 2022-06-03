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

    expect(Calc.getOperationBuilder(inputs).operations).toEqual(operations);
})


test('derive final state without equal sign', () => {
    const inputs: CalcInput[] = [
        { type: InputType.Number, value: 1 },
        { type: InputType.Number, value: 2 },
        { type: InputType.Operation, operator: operatorType.Add },
        { type: InputType.Number, value: 3 },
    ]

    const result = Calc.getState(inputs)

    expect(result.displayValue).toEqual(3);
})

test('derive final state when inputs are empty', () => {
    const inputs: CalcInput[] = []

    const result = Calc.getState(inputs)

    expect(result.displayValue).toEqual(0);
})

test('derive final state', () => {
    const inputs: CalcInput[] = [
        { type: InputType.Number, value: 1 },
        { type: InputType.Number, value: 2 },
        { type: InputType.Operation, operator: operatorType.Add },
        { type: InputType.Number, value: 3 },
        { type: InputType.Operation, operator: operatorType.Equal }
    ]

    const result = Calc.getState(inputs)

    expect(result.displayValue).toEqual(15);
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