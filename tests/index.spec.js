const expect = require('expect.js');
const sinon = require('sinon')
const { get } = require('../index')

let sandbox = sinon.createSandbox()

const defaultParameters = process.argv.slice(0, 2)

const mockProcessWithValues = values =>
    sandbox
    .stub(process, 'argv')
    .value((Array.from(defaultParameters))
    .concat(Array.from(values)))

describe('CLI Parameter getter', () => {
    beforeEach(() => {
        sandbox.stub(process, 'argv').value(defaultParameters)
    })

    afterEach(() => {
        sandbox.restore()
    })

    describe('should have a contract', () => {
        it('which return the \"name\" property in the first position of array', () => {
            const parameters = 'jota'
            mockProcessWithValues([parameters])
            const result = get()
            expect(result[0]).to.have.property('name')
        })

        it('which return the \"value\" property in the first position of array', () => {
            const parameters = 'feldmann'
            mockProcessWithValues([parameters])
            const result = get()
            expect(result[0]).to.have.property('value')
        })
    })
    describe('in case of just one parameter name', () => {
        it('must return the parameter as a property', () => {
            const parameters = 'xablau'
            mockProcessWithValues([parameters])
            const result = get()
            expect(result).to.have.property(parameters)
        })

        it('must return the parameter as a value', () => {
            const parameters = 'lovecraft'
            mockProcessWithValues([parameters])
            const result = get()
            expect(result[parameters]).to.be.equal(parameters)
        })

        it('must return the parameter in the first position of array', () => {
            const parameters = 'lovecraft'
            mockProcessWithValues([parameters])
            const result = get()
            expect(result[0]).to.be.eql({ name: parameters, value: parameters })
        })
    })

    describe('in case of \"parameter=value\"', () => {
        it('must return the \"parameter=value\"', () => {
            const name = 'cthulhu'
            const value = 'rises'
            const parameters = `${name}=${value}`
            mockProcessWithValues([parameters])
            const result = get()
            expect(result[name]).to.be.equal(value)
        })

        it('must return the \"parameter=value\" in the first position of array', () => {
            const name = 'cthulhu'
            const value = 'rises'
            const parameters = `${name}=${value}`
            mockProcessWithValues([parameters])
            const result = get()
            expect(result[0]).to.be.eql({ name, value })
        })
    })

    describe('in case of \"parameter1=value1 parameter2=value2\"', () => {
        it('must contain 2 elements in array', () => {
            const name1 = 'cthulhu'
            const value1 = 'rises'
            const parameter1 = `${name1}=${value1}`
            const name2 = 'cthulhu'
            const value2 = 'rises'
            const parameter2 = `${name2}=${value2}`
            mockProcessWithValues([parameter1, parameter2])
            const result = get()
            expect(result.length).to.be.equal(2)
        })

        it('must have the first parameter as property', () => {
            const name1 = 'cthulhu'
            const value1 = 'rises'
            const parameter1 = `${name1}=${value1}`
            const name2 = 'azatoth'
            const value2 = 'rules'
            const parameter2 = `${name2}=${value2}`
            mockProcessWithValues([parameter1, parameter2])
            const result = get()
            expect(result[0]).to.be.eql({
                name: name1,
                value: value1
            })
        })

        it('must have the second parameter as property', () => {
            const name1 = 'cthulhu'
            const value1 = 'rises'
            const parameter1 = `${name1}=${value1}`
            const name2 = 'azatoth'
            const value2 = 'rules'
            const parameter2 = `${name2}=${value2}`
            mockProcessWithValues([parameter1, parameter2])
            const result = get()
            expect(result[1]).to.be.eql({
                name: name2,
                value: value2
            })
        })
    })

    describe('must check corners cases', () => {
        describe('when 2 parameters', () => {
            it('have the same value', () => {
                const name1 = 'cthulhu'
                const value1 = 'rises'
                const parameter1 = `${name1}=${value1}`
                const name2 = name1
                const value2 = value1
                const parameter2 = `${name2}=${value2}`
                mockProcessWithValues([parameter1, parameter2])
                const result = get()
                expect(result[1]).to.be.eql({
                    name: name2,
                    value: value2
                })
            })
    
            it('have the same value its must have 2 items in array', () => {
                const name1 = 'cthulhu'
                const value1 = 'rises'
                const parameter1 = `${name1}=${value1}`
                const name2 = name1
                const value2 = value1
                const parameter2 = `${name2}=${value2}`
                mockProcessWithValues([parameter1, parameter2])
                const result = get()
                expect(result.length).to.be.equal(2)
            })
    
            it('have the same name but different values, the second must prevail', () => {
                const name1 = 'cthulhu'
                const value1 = 'rises'
                const parameter1 = `${name1}=${value1}`
                const name2 = name1
                const value2 = 'rules'
                const parameter2 = `${name2}=${value2}`
                mockProcessWithValues([parameter1, parameter2])
                const result = get()
                expect(result[name1]).to.be.equal(value2)
            })
        })
    })

    
})