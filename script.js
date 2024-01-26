// activate hamburger when clicked on bar and deactivate when clicked on X
const bar= document.getElementById('bar');
const nav=document.getElementById('navbar');

const close=document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}