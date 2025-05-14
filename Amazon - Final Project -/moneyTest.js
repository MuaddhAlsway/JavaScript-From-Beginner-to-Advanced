import {formatCurrency} from '../../Script/utils/money.js';

describe('Test suit: formatCurrency', ()=>{
    it('convert cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('work with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
        });
    
    it('rounds up to nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
    });
       

});