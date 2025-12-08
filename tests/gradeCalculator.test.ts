import { describe, expect, it } from 'vitest';
import { GradeCalculator } from '../src/domain/GradeCalculator.js';

const calculator = new GradeCalculator();

describe('GradeCalculator', () => {
    it('calcula a média aritmética', () => {
        expect(calculator.arithmeticAverage([8, 7, 9])).toBeCloseTo(8, 2);
    });

    it('calcula a média ponderada', () => {
        expect(calculator.weightedAverage([8, 6, 10], [1, 2, 3])).toBeCloseTo(8.33, 2);
    });

    it('encontra a maior nota', () => {
        expect(calculator.highestGrade([5, 7.5, 9.8, 3])).toBe(9.8);
    });

    it('encontra a menor nota', () => {
        expect(calculator.lowestGrade([5, 7.5, 9.8, 3])).toBe(3);
    });
});
