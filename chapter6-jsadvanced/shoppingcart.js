let cart = ['milk', 'egg'];

//inserts honey after checking if already in cart
function insertHoney() {
    if (cart.indexOf('honey')== -1) {
        cart.push('honey');
        alert('Honey inserted');
    }   else {
            alert('Honey already exists');
    } 
}

function deleteHoney() {
    let deleted = false;
    let output;
    //when deleting we go from last to first because items are shifted from finish to start
    //could use indexOf instead of the below; however for{} is better when we have multiple entries
    for (let i = cart.length - 1; i >=0; i--) {
        if (cart[i] == 'honey') {
            cart.splice(i, 1);
            //alert('Honey deleted');
            deleted = true;
        }
    }
    output = (deleted) ? 'Honey deleted succesfuly' : 'Honey not found';
    alert(output);
}

insertHoney();
insertHoney();
deleteHoney();
deleteHoney();