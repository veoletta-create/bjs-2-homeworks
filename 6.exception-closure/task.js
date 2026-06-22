// Задача 1. Форматтер чисел
function parseCount(value) {
    const parsed = Number.parseFloat(value);
    if (isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (e) {
        return e;
    }
}

// Задача 2. Треугольник
class Triangle {
    constructor(a, b, c) {
        if (a <= 0 || b <= 0 || c <= 0 ||
            a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this._a = a;
        this._b = b;
        this._c = c;
    }

    get perimeter() {
        return this._a + this._b + this._c;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
        return Math.round(area * 1000) / 1000;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (_) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}