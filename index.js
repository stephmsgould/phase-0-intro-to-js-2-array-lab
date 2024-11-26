// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    
    console.log(cats.push("Ralph"))
    
}

function destructivelyPrependCat(name) {
    console.log(cats.unshift("Bob"))
}

function destructivelyRemoveLastCat(name) {
    console.log(cats.pop())
}

function destructivelyRemoveFirstCat(name) {
    console.log(cats.shift())
}

function appendCat(name) {
    var newArray = cats.slice();
    newArray.push("Broom")
    return newArray

}

function prependCat(name) {
    var newArray = cats.slice();
    newArray.unshift("Arnold")
    return newArray
}

function removeLastCat(name) {
    var newArray = cats.slice();
    newArray.pop()
    return newArray
}

function removeFirstCat(name) {
    var newArray = cats.slice();
    newArray.shift()
    return newArray
}