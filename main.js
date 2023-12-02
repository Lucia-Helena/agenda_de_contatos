const form = document.getElementById("form-contact");
const cellNome = [];
const cellPhone = [];
let line = "";

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addContact ();
    updateContact ();
})

function addContact() {
    const inputNameContact = document.getElementById('nome-contact');
    const inputTell = document.getElementById('tell-contact');
    
    cellNome.push (inputNameContact.value);
    Contact.push(parseInt(inputTell.value));

    let line = `<tr>`;
    line +=`<td> ${inputNameContact.value}</td>`;
    line += `<td> ${inputTell.value}</td>`;
    line += `<tr>`;
    lines += line;

    inputNameContact.value = "";
    inputTell.value = "";
}

function  updateContact () {
    const table = document.querySelector('tbody');
    table.innerHTML = lines;
}