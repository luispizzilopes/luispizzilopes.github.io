const buttonWhatsapp = document.querySelector('#whatsapp'); 
const buttonInstagram = document.querySelector('#instagram'); 
const buttonFacebook = document.querySelector('#facebook'); 
const buttonLinkedin = document.querySelector('#linkedin'); 
const linkDesenvolvedor = document.querySelector('.desenvolvedor'); 

buttonWhatsapp.addEventListener('click', ()=>{
    window.open('https://api.whatsapp.com/send?phone=5516981457144');
});

buttonInstagram.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/pizzipv/'); 
});

buttonFacebook.addEventListener('click', ()=>{
    window.open('https://www.facebook.com/paulo.pizzi.3'); 
});

buttonLinkedin.addEventListener('click', ()=>{
    window.open('https://www.linkedin.com/in/paulo-victor-pizzi/');
})

linkDesenvolvedor.addEventListener('click', ()=>{
    window.open('https://www.linkedin.com/in/luis-felipe-pizzi-lopes-04b531204/'    ); 
});