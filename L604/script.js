// L604 დაწერეთ სკრიპტი რომელიც სთხოვს მომხმარებელს სახელების შეყვანას
// და დინამიურად ქმნის მათ სიას გვერდზე, ანუ ყოველი შეყვანილი სახელი
// ემატება სიაში. პროცესი გრძელდება სანამ მომხმარებელი არ დააჭერს esc ღილაკს
// ან დატოვებს სახელის შესავსებ ველს ცარიელს


function addToList()
{
    let list = document.body.querySelector("#student-list");
  
    while(true)
    {
        let input = prompt("შეიყვანეთ სტუდენტის სახელი:", "");
        let li = document.createElement("li");
        
        if (input.length === 0)
        {
        break;
        }

        else
        {
            li.innerHTML = input;
            list.appendChild(li);
        }
    }
}
  
addToList();