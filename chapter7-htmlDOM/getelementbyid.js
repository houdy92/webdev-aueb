//assign the html object to a JS variable so in the next cmds we can use the variable
//better to use const for such variables
const auebTitle = document.getElementById('auebTitle');
//give the text value instead of when decalring h1
auebTitle.textContent = 'Athens University of Economics & Business';
//read the value of the DOM object & display in pop-up
//alert runs first!
alert(auebTitle.textContent);