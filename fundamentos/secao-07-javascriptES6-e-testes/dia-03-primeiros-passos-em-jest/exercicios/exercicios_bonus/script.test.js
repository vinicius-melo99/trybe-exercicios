const { expect } = require('expect');
const { searchEmployee } = require('./script');

describe('Testa a função searchEmployee', () => {
    test('Verifica se existe a função searchEmployee', () => {
        expect(searchEmployee).toBeDefined();
    });

    test('Verifica se o retorno é correto, passando o ID: 4456-4, querendo acessar o firstName', () => {
        expect(searchEmployee('4456-4', 'firstName')).toBe('ID: 4456-4, Informação: Leila');
    });

    test('Verifica se o retorno é correto, passando o ID: 1256-4, querendo acessar specialities', () => {
        expect(searchEmployee('1256-4', 'specialities')).toBe('ID: 1256-4, Informação: Hooks, Context API, Tailwind CSS');
    });

    test('Verifica se ao passar um ID inexistente, o retorno é: ID não identificado.', () => {
        expect(searchEmployee('999-9', 'specialities')).toBe('ID não identificado');   
    });

    test('Verifica se ao passar uma info inexistente, o retorno é: Informação indisponível', () => {
        expect(searchEmployee('1256-4', 'address')).toBe('Informação indisponível');   
    });
}); 