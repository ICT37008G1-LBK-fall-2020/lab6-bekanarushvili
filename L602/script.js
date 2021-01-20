// L602 დაწერეთ ფუნქცია insertAfter(elem, refElem)
// რომელიც ჩასვავს ერთ ელემენტს მეორეს შემდეგ

function insertAfter(elem, refElem)
{
    let container = refElem.parentElement;
    let nextElement = refElem.nextElementSibling;

    container.insertBefore(elem, nextElement);
}


let element = document.createElement('div');

element.textContent = 'test';


let refElem = document.getElementById('first');

insertAfter(element, refElem);