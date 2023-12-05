const form = document.getElementById("form-contact");
const cellName = [];
const cellPhone = [];
let lines = "";

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addContact ();
    updateContact ();
})

function addContact() {
    const inputNameContact = document.getElementById('nome-contact');
    const inputTell = document.getElementById('tell-contact');

    lines = "";
    
    cellName.push(inputNameContact.value);
    cellPhone.push(parseFloat(inputTell.value));

    let line = `<tr>`;
    line +=`<td> ${inputNameContact.value}</td>`;
    line += `<td> ${inputTell.value}</td>`;
    line += `<tr>`;
    lines += line;

    inputNameContact.value = "";
    inputTell.value = "";
}

function  updateContact() {
    const table = document.getElementById('tb-contact');
    table.innerHTML += lines;
}