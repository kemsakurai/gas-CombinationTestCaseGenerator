import {oneWise} from './oneWise';

describe('oneWise()', () => {
    test('Empty array should return empty array', () => {
        expect(oneWise([])).toStrictEqual([[]])
    })
    test('One array should return One array', () => {
        expect(oneWise([[1]])).toStrictEqual([[1]])
    })
    test('Two array should return Two array', () => {
        expect(oneWise([[1],["A","B"]])).toStrictEqual([[1,"A"],[1, "B"]])
    })
    test('Two array should return One wise test case', () => {
        const fakeRandom = () => 0.1;
        expect(oneWise([[1, 2],["A","B","C"]],fakeRandom)).toStrictEqual([[1,"A"],[2, "B"],[1, "C"]])
    })  
})
