//declare array of objects
let mobileContacts = [{name: 'Androutsos Athan.', phone: '6901'}] //array with one element that is an object

function insertContact(contactName, phoneNumber) {
    let contact = {name: contactName, phone: phoneNumber};
    mobileContacts.push(contact);
    alert('Contact inserted');
}

function deleteContact(phoneNumber) {
    let deleted = false;
    let output;
    for (let i = mobileContacts.length -1; i>=0; i-- ) {
        if (mobileContacts[i]['phone'] == phoneNumber) {
            mobileContacts.splice(i, 1);
            deleted = true;
        }
    }
    output = (deleted) ? "Contact Deleted Successfully" : "Contact not Found"
    alert(output);
}

function printContacts(contacts) {
    for (let contact of contacts) {
        for (let property in contact) {
            document.write(contact[property] + ' ')
        }
        document.write('<br>');
    }
}

insertContact('Giannoutsou Anna', '6902');
insertContact('Giannoutsou L.', '6903');
printContacts(mobileContacts);
document.write('<br>');
deleteContact('6903');
printContacts(mobileContacts);