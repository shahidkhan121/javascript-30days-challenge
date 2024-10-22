let box = document.querySelector('.box');
let cross = document.getElementById('cross')
let visible = document.getElementById('visible')

cross.addEventListener('click', ()=>{
   box.classList.add('hidden')
   visible.style.display = 'block'
})
visible.addEventListener('click', ()=>{
    box.classList.remove('hidden');
    visible.style.display = 'hidden'
})