const {fromDollarToYen,fromEuroToDollar,fromYenToPound} = require('./app.js')

test('',()=>{
    let total = fromDollarToYen(500)
    expect(total).toBe(73130.84)
})

test('',()=>{
    let total = fromEuroToDollar(500)
    expect(total).toBe(535)
})

test('',()=>{
    let total = fromYenToPound(500)
    expect(total).toBe(2.78)
})