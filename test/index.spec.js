const chai = require('chai');
const expect = chai.expect;
const validator = require('../index');

describe('cardValidator()', () => {
    it ('false to equal digits', () => { 
        expect(validator.cardValidator('0000000000000000')).to.equal(false);
    });

    it ('false to equal digits', () => { 
        expect(validator.cardValidator('8888888888888888')).to.equal(false);
    });

    it ('false to more than 16 digits', () => { 
        expect(validator.cardValidator('00000000123456789')).to.equal(false);
    });

    it ('false to less than 16 digits', () => { 
        expect(validator.cardValidator('0123456789')).to.equal(false);
    });

    it ('false to letters', () => { 
        expect(validator.cardValidator('abcdefghijklmnop')).to.equal(false);
    });

    it ('false to special characters', () => { 
        expect(validator.cardValidator('5404.5948.6699.8688')).to.equal(false);
    });

    it ('valid card', () => { 
        expect(validator.cardValidator('5404594866998688')).to.equal(true);
    });

})
