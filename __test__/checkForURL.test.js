const {checkForURL} = require('../src/client/js/URLchecker.js')

describe('Testing url Validator', () => {
    test('Check returning false in case undefined value for url', () => {
        expect(checkForURL(undefined)).toBeFalsy()
    })

    test('Check returning false if invalid url entered', () => {
        expect(checkForURL('something')).toBeFalsy()
    })

    test('Check returning true if valid url entered', () => {
        expect(checkForURL('https://www.google.com')).toBeTruthy()
    })
})