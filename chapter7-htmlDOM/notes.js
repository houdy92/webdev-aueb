function getGRDate() {
    let daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
    let monthsGR = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', "Μάιος", 'Ιούνιος', 'Ιούλιος', 'Αύγπυστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος']
    let cdate = new Date();

    let day = daysGR[cdate.getDay()];
    let date = cdate.getDate();
    let month = monthsGR[cdate.getMonth()];
    let year = cdate.getFullYear();
    let hours = cdate.getHours();
    let minutes = cdate.getMinutes();
    let seconds = cdate.getSeconds();

    return day + ',' + date + ' ' + month + ' ' + year + '<br>' +
        (((hours < 10) ? '0' : '') + hours) + ':' + (((minutes < 10) ? '0' : '') + minutes) + ':' +
        (((seconds < 10) ? '0' : '') + seconds);

}

//debug apo browser inspect console

let header = document.querySelector('.header');
header.innerHTML = getGRDate();
// header.innerHTML = Date(); den einai sto format pou 8elw

let idnum = 1;

function insertItem() {
    let noteName = document.getElementById('note-name');
    let noteNameText = noteName.value;
    //=== isxiri isotita kai timi kai tipos
    if (noteNameText === '') {
        return
    }

    let newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox');
    newCheckbox.setAttribute('id', 'item' + idnum);
    newCheckbox.setAttribute('onclick', 'strikeThrough(this)');

    let newlbl = document.createElement('label');
    newlbl.setAttribute('for', 'item' + idnum);
    newlbl.innerHTML = noteNameText;

    let newdiv = document.createElement('div');
    newdiv.setAttribute('class', 'item');
    newdiv.appendChild(newCheckbox);
    newdiv.appendChild(newlbl);

    let newbtn = document.createElement('button');
    newbtn.setAttribute('type', 'button');
    newbtn.setAttribute('onclick', 'deleteItem(this.parentElement)');
    newbtn.textContent = 'X';

    let newli = document.createElement('li');
    newli.appendChild(newdiv);
    newli.appendChild(newbtn);

    //eddw query giati iparxei idi den einai new
    //PROSOXI STIN TELEIA .main
    let ul = document.querySelector('.main > ul');
    ul.appendChild(newli);

    noteName.value = '';
    idnum++;
}

document.getElementById('note-name').addEventListener('keyup', function(event){
    if ((event.key === 'Enter') && (document.getElementById('note-name').value !='')) {
        insertItem();
    }
})

function deleteItem(item) {
    item.remove();
}

function strikeThrough(item) {
    if (item.checked) {
        item.nextElementSibling.style.textDecoration = 'line-through';
        item.nextElementSibling.style.color = 'grey';
    } else {
        item.nextElementSibling.style.textDecoration = 'none';
        item.nextElementSibling.style.color = 'black';
    }
}