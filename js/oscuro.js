const btn_oscuro= document.querySelector('#btn_dark');

btn_oscuro.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
});