// Задание 1
/** Написать, функцию, которая принимает в качестве аргумента объект
 *  и выводит в консоль все ключи и значения только собственных свойств. 
 *  Данная функция не должна возвращать значение.*/
const myObject = {
    key1: "value1",
    key2: "value2", 
}
function myFunction (object1) {
    for (const key in object1) {
        console.log(key, object1[key]);
    }
}

myFunction(myObject)