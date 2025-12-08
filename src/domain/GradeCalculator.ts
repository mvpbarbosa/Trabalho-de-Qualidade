export class GradeCalculator {
    private ensureGrades(values: number[]) {
        if (!Array.isArray(values) || values.length === 0) {
            throw new Error('grades precisa ser uma lista com pelo menos um número');
        }
        values.forEach(value => {
            if (typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value)) {
                throw new Error('todos os valores precisam ser números reais finitos');
            }
        });
    }

    arithmeticAverage(grades: number[]): number {
        this.ensureGrades(grades);
        const sum = grades.reduce((total, grade) => total + grade, 0);
        return Number((sum / grades.length).toFixed(2));
    }

    weightedAverage(grades: number[], weights: number[]): number {
        this.ensureGrades(grades);
        if (!Array.isArray(weights) || weights.length !== grades.length) {
            throw new Error('weights precisa ter o mesmo tamanho que grades');
        }
        weights.forEach(weight => {
            if (typeof weight !== 'number' || Number.isNaN(weight) || !Number.isFinite(weight) || weight < 0) {
                throw new Error('weights precisa conter números reais não negativos');
            }
        });
        const totalWeight = weights.reduce((total, weight) => total + weight, 0);
        if (totalWeight === 0) {
            throw new Error('a soma dos pesos precisa ser maior que zero');
        }
        const weightedSum = grades.reduce((total, grade, index) => total + grade * weights[index], 0);
        return Number((weightedSum / totalWeight).toFixed(2));
    }

    highestGrade(grades: number[]): number {
        this.ensureGrades(grades);
        return Math.max(...grades);
    }

    lowestGrade(grades: number[]): number {
        this.ensureGrades(grades);
        return Math.min(...grades);
    }
}
