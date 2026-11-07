import { test, expect } from 'vitest';
const { calcularPromedio, estaAprobado } = require('../src/calificaciones');

test('promedio 12, 14, 16 = 14', () => {
    expect(calcularPromedio([12, 14, 16])).toBe(14);
});

test('nota 11 es aprobatoria', () => {
    expect(estaAprobado(11)).toBe(true);
});