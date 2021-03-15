import 'babel-polyfill'
const {handleSubmit} = require('../src/client/js/formHandler.js')

describe('Testing handleSubmit', () => {
    test('Check successful calling of the function', () => {
        const event={preventDefault:()=>{}}
        expect(handleSubmit(event)).toBeDefined()
    })
})