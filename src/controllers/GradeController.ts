import { Request, Response } from 'express';
import { GradeCalculator } from '../domain/GradeCalculator.js';

const calculator = new GradeCalculator();

const parseNumberArray = (value: unknown, field: string): number[] => {
    if (!Array.isArray(value)) {
        throw new Error(`${field} precisa ser uma lista numérica`);
    }
    return value.map(item => {
        const numberValue = Number(item);
        if (!Number.isFinite(numberValue)) {
            throw new Error(`${field} precisa conter apenas números reais`);
        }
        return numberValue;
    });
};

export class GradeController {
    average(req: Request, res: Response) {
        try {
            const grades = parseNumberArray(req.body?.grades, 'grades');
            const result = calculator.arithmeticAverage(grades);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    weightedAverage(req: Request, res: Response) {
        try {
            const grades = parseNumberArray(req.body?.grades, 'grades');
            const weights = parseNumberArray(req.body?.weights, 'weights');
            const result = calculator.weightedAverage(grades, weights);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    highest(req: Request, res: Response) {
        try {
            const grades = parseNumberArray(req.body?.grades, 'grades');
            const result = calculator.highestGrade(grades);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    lowest(req: Request, res: Response) {
        try {
            const grades = parseNumberArray(req.body?.grades, 'grades');
            const result = calculator.lowestGrade(grades);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }
}
