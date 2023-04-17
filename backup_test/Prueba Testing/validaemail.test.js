const EmailValidator = require("./EmailValidator");

describe('Given emailValidator', () => {
    describe('When I call to isValidEmail with a valid email', () => {
        test("Then should be truthy", () => {
        
            // given
            const emailValidator = new EmailValidator()
            const email = 'a@gmail.com'
        
            // when
            const result = emailValidator.isValidEmail(email)
        
            // then
            expect(result).toBeTruthy()
        });
    })

    describe('When I call to isValidEmail with a NOT valid email', () => {
        test("Then should be falsy", () => {
        
            // given
            const emailValidator = new EmailValidator()
            const email = 'hola mundo'
        
            // when
            const result = emailValidator.isValidEmail(email)
        
            // then
            expect(result).toBeFalsy()
        });
    })
})
