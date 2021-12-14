//Populate & Insert
let products = ['milk', 'egg'];
products[products.length] = 'honey'; //add to the array end
products.push('honey'); //js cmd to inster element at array end
products.unshift('honey'); //js cmd to inster element at array start
products.splice(1, 0, 'orange'); //in array index 1 delete 0 items and add 'orange'

alert(products.join()); //join adds array elements in a string

//How to Delete element (and also extract) the last array element
let product = products.pop(); //last item extracted to var product & deleted from products[]
let shiftedproduct = products.shift(); //first item extracted to var product & deleted from products[]

let deletedproduct = products.splice(1,1); //from array index 1 deletes 1 element and saves it, etc.

alert(products.join());

//Search
let orangeposition = products.indexOf('orange');
alert(orangeposition);

//Update of element value
products[0] = 'oranges';
alert(products.join());

//Traverse
for(let i = 0; i < products.length; i++) { //attention < not <= when using length
    document.write(products[i] + ' ');
}

//simple of above
for (let product of products) { //product is a local var 
    document.write(product + '--');
}