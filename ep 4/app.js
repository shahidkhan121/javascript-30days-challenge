let password = document.getElementById('password')
let eyeicon = document.getElementById('eyeicon')

eyeicon.addEventListener('click', ()=>{
   if(password.type == 'password'){
    password.type = 'text';
    eyeicon.src = '/images/eye-close.png'
   }
   else{
    password.type = 'password';
     eyeicon.src = '/images/eye-open.png'

   }
})