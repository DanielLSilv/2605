const isValidEmail = require('../Twast/validador');

describe('validação de Email', () => {
    test('retornar true para email valido', () => {
        expect(isValidEmail('user@gmail.com')).toBe(true);
    });
});



