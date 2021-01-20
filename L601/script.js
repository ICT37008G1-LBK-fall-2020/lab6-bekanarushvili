// L601 დაწერეთ სკრიპტი რომელიც სთხოვს მომხმარებელს შეიყვანოს სტუდენტის id
// და შემდგომ იპოვის ყველა ელემენტს ატრიბუტით data-student-id რომლის მნიშვნელობა
// მომხმარებლის მიერ შეყვანილიs ტოლია და შეუცვლის ფონს მწვანე ფერით.

let question = prompt('შეიყვანეთ სტუდენტის ID:', '');

let elements = document.body;

for(let i = 0; i < elements.children.length; i++)
{
    if(elements.children[i].getAttribute('data-student-id') == question)
    elements.children[i].style.backgroundColor = "green";
}