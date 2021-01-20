// L605 დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს სტუდენტების ობიექტები სიას
// ფორმატით { FirstName: ‘test’, LastName: ‘test’, PersonalNumber: ‘1234'}
// და გამოიტანს მათ გვერდზ ცხრილის სახით (შექმნის html table-ს).


// ნიმუში, რომელიც თავდაპირველ/ორიგინალ ფაილს მოყვა
// // var students = [
// //     { FirstName: 'დავით', LastName: 'წულუკიძე', PersonalNumber: '123'},
// //     { FirstName: 'მიხილ', LastName: 'კაპანაძე', PersonalNumber: '124'},
// //     { FirstName: 'სოფო', LastName: 'დოღონაძე', PersonalNumber: '125'}
// // ];



// // function displayStudentsTable(studentList){
// //     //write code
// // }


// // displayStudentsTable(studens);

let students =
[
    { სახელი: "დავით", გვარი: "წულუკიძე", პირადი_ნომერი: "123" },
    { სახელი: "მიხილ", გვარი: "კაპანაძე", პირადი_ნომერი: "124" },
    { სახელი: "სოფო", გვარი: "დოღონაძე", პირადი_ნომერი: "125" },
];
  
function displayStudentsTable(studentList)
{
    let container = document.body.querySelector("#student-list");
    let keys = Object.keys(studentList[0]);
    let table = document.createElement("table");
    let trh = document.createElement("tr");
  
    container.appendChild(table);
    table.append(trh);
    for (let i = 0; i < keys.length; i++)
    {
        let th = document.createElement("th");
        th.innerHTML = keys[i];
        trh.appendChild(th);
    }
    for (let i = 0; i < studentList.length; i++)
    {
        let trd = document.createElement("tr");
        table.append(trd);
        for (let j = 0; j < keys.length; j++)
        {
            let td = document.createElement("td");
            td.innerHTML = studentList[i][keys[j]];
            trd.appendChild(td);
        }
    }
}
  
displayStudentsTable(students);