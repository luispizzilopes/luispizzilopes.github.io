const buttonWhatsapp = document.querySelector(".whatsapp");
const buttonDownloadCv = document.querySelector(".download");
const buttonLinkedin = document.querySelector("#linkedin");
const buttonInstagram = document.querySelector("#instagram");
const buttonGithub = document.querySelector("#github");

buttonWhatsapp.addEventListener("click", () => {
  window.open("https://api.whatsapp.com/send?phone=5519991305972");
});

buttonGithub.addEventListener("click", ()=>{
    window.open("https://www.github.com/luispizzilopes"); 
});

buttonLinkedin.addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/luis-felipe-pizzi-lopes-04b531204/"); 
});

buttonInstagram.addEventListener("click", ()=>{
    window.open("https://www.instagram.com/luispizzilopes"); 
});

buttonDownloadCv.addEventListener("click", ()=>{
    window.open("https://drive.google.com/file/d/1qfZ5RtbR8OE8bOBWv1gyhPE4LwOBCJ9U/view?usp=drive_link"); 
}); 
