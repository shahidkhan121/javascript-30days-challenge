let input = document.querySelector('.input')
let addBtn = document.querySelector('.add-Btn')
let tasks = document.querySelector('.tasks')

console.log(input + 'input');


// add button disabbled

input.addEventListener('keyup', ()=> {
    if(input.value.trim() !=0){
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active')
    }
})
addBtn.addEventListener('click', ()=>{
    if(input.value.trim() !=0){
       let newItem = document.createElement('div')
        newItem.classList.add('task1');
        newItem.innerHTML= `
         <p>${input.value}</p>
                <div class="icons">
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-xmark"></i>
                 
                </div>
        `
        tasks.appendChild(newItem);
        input.value='';

    } 
    else{
        alert('please enter a task')
    }

})

// delete a task

tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove()
    }
})
tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-pencil')){
        e.target.parentElement.parentElement.classList.toggle('completed')
    }
})