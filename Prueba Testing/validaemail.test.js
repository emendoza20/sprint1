const ValidaEmail=require('./validaemail')

test('email emendoza867@gmail.com -> true',()=>{
    expect(ValidaEmail.isValidaEmail(' emendoza867@gmail.com')).toBe(true)

});
test('email 1 -> false',()=>{
    expect(ValidaEmail.isValidaEmail(' 1')).toBe(false)

});