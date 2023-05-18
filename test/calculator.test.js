const calculator=require('../calculator.js');

test('Addition Test', ()=>{

    expect(calculator.add(2,2)).toBe(4);
});

test('Subtraction Test', ()=>{

    expect(calculator.sub(8,2)).toBe(6);
});

test('multiplication Test', ()=>{

    expect(calculator.mul(8,3)).toBe(24);
});

test('Division Test', ()=>{

    expect(calculator.div(40,5)).toBe(8);
});