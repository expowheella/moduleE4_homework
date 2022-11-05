// Задание 3.
/** Написать функцию, которая создает пустой объект, 
 *  но без прототипа.*/
function createObject () {
    return {}
}

newObject  = createObject()
console.log(typeof newObject)

newObject.key1 = "value1"
console.log(newObject)