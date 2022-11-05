// Задание 2
/** Написать функцию, которая принимает в качестве аргументов
 *  строку и объект, а затем проверяет есть ли у переданного 
 * объекта свойство с данным именем. 
 * Функция должна возвращать true или false */

 function keyCheck (s, obj) {
    if (obj.hasOwnProperty(s)) {
        console.log(true)
    } else {
        console.log(false)            
    }
}


keyCheck("key1", myObject)
keyCheck("key2", myObject)
keyCheck("key3", myObject)
