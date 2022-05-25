function* generatorFunction(){
    yield "fName"
    yield 'Morbius'
    yield 'Trinity'

    return 'The Oracle'
}
const generator = generatorFunction()
console.log(generator)
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
