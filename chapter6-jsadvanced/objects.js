//declare object studentAlice
let studentAlice = {
    firstname: 'Alice',
    lastname: 'Alice in Wonderland',
    age: 18,
    height: 1.65
}

studentAlice.lastname = 'Alice Wonderland';
studentAlice['age'] = 19; //line 9 and 10 have a difference

//for (... in ...) goes through all object properties
for (let property in studentAlice) {
    document.write(`${studentAlice[property]} `) //here can't use . need []
}

