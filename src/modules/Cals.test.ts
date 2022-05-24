import '@testing-library/react'
import {CalcInput, InputType , operatorType } from './Calc'
import Calc from './Calc'


test('derive state' , () => {
    const inputs: CalcInput[] = [
        {type: InputType.Number , value: 1},
        {type: InputType.Number , value: 2},
        {type: InputType.Operation , operator: operatorType.Add},
        {type: InputType.Number , value: 3},
        {type: InputType.Operation , operator: operatorType.Equal}
    ]

    const result = Calc.getState(inputs)

    expect(result.displayValue).toEqual(15);
})