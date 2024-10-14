// console.log(hello);

// handleSubmit = (e) =>{
//     // console.log('button clicked');
//     alert('bytton clicked')
    
// }

// document.getElementById('button').onclick(handleclick)
// const handleclick = () =>{
//     alert('button Clicked')
// }
// const email = e.target.value
// const handleclick =() =>{
//     console.log(email);
    
// }

const form = document.getElementById('form')
form.addEventListener('submit',(e) =>{
   e.preventDefault()
   const name = document.getElementById('name').value
   const email = document.getElementById('email').value
   const password = document.getElementById('password').value

   console.log(`Name =>  ${name}`);
   console.log(`Email =>  ${email}`);
   console.log(`Password =>  ${password}`);


   alert(`Name =>  ${name} && Email =>  ${email} && Password =>  ${password}`)
  
   
})
