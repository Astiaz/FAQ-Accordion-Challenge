
const accordion = document.getElementsByClassName('accordion__card');
console.log(accordion);

for (let i = 0; i < accordion.length; i++) {
    // iteramos dentro del objeto para añadirle un evento a cada elemento
    accordion[i].addEventListener('click', function(){
        // la instancia en ese momento añadimos la clase "toggle"
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}