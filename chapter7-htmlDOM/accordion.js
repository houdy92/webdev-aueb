//edw bazw se pinaka ola ta stoixeia me auto to onoma
let accordions = document.getElementsByClassName('accordion');

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function() {
        let panel = this.nextElementSibling; //to div einai to nextelsibling to li (einai meta)
        let fa = this.firstChild; //to this einai to li to firstchild einai to belaki, allo child to einai to keimeno

        if (panel.style.display === 'block') { //an einai anoixto dld to div
            panel.style.display = 'none';
            this.classList.remove('active'); //active einai to entono background
            fa.classList.remove('fa-chevron-up');
            fa.classList.add('fa-chevron-down');
        } else { //an einai kleisto to div
            for (let j = 0; j <accordions.length; j++) {
                //ta kleinw ola (ta divs ka8e li)
                accordions[j].nextElementSibling.style.display = 'none';
                accordions[j].classList.remove('active');
                accordions[j].firstChild.classList.remove('fa-chevron-up');
                accordions[j].firstChild.classList.add('fa-chevron-down');
            }
            //kai to anoigw
            panel.style.display = 'block';
            this.classList.add('active');
            fa.classList.remove('fa-chevron-down');
            fa.classList.add('fa-chevron-up');
        }
    }) 
}