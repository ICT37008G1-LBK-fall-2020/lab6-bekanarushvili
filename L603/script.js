// L603 დაწერეთ ფუნქცია removeChildren(elem) რომელიც წაშლის ელემენტის ყველა შვილს

function removeChildren(elem)
{
    elem.innerHTML = '';
}

removeChildren(document.getElementById('container'));