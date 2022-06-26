
function setMessegeError(formElement,type,messege){

    let  messegeElement = formElement.querySelector('.form-messege');

messegeElement.textContent = messege;
messegeElement.classList.remove('form-messege-sucsess','form-messege-error');
messegeElement.classList.add(`form-messege-${type}`)

}

function inputError(inptElement,type,messege){

inptElement.classList.add(`input-form-${type}`);
inptElement.parentElement.querySelector('.form-input-error-messege').textContent = messege;
}



document.addEventListener("DOMContentLoaded",function(){


    let loginForm = document.getElementById('login');
    let createAccountForm = document.getElementById('sign up');
    let loginLink = document.getElementById('linkToLogin');
    let createAccountLink = document.getElementById('linkToCreateAcount');
    let createAccountErrorMessege = ['This Username Already Used','This Email Already Used'];
    ;
    let emailInput = document.getElementById('emailInput-log'),
    passwordInput = document.getElementById('passwordInput-log');


  
  


    
  createAccountLink.onclick = function(p){
      p.preventDefault()
          loginForm.classList.add('form-hidden')
     createAccountForm.classList.remove('form-hidden')

    }
    loginLink.onclick = function(p){
        p.preventDefault()
        loginForm.classList.remove('form-hidden')
        createAccountForm.classList.add('form-hidden')
        
    }
   
    loginForm.addEventListener('submit',(p)=>{

let loginmood ;
        for (let i = 0; i <dataaccount.length; i++) {

   if(dataaccount[i].email === emailInput.value.toLowerCase() 
   &&  dataaccount[i].pass === passwordInput.value.toLowerCase()){
    
    loginmood = 'sucsess'
   }
 
          if(loginmood === 'sucsess' || loginmood === 2 + 'sucsess' ){
            p.preventDefault()
           window.location.href = '../index.html';
           setMessegeError(loginForm,"sucsess","")
           inputError(emailInput,'sucsess','')
           inputError(passwordInput,'sucsess',"") ;
           emailInput.parentElement.querySelector('.form-input-error-messege').classList.add('form-messege-sucsess')
           passwordInput.parentElement.querySelector('.form-input-error-messege').classList.add('form-messege-sucsess')
          
           break;
      }
     else if(dataaccount[i].email === emailInput.value) {
     
       p.preventDefault()
       setMessegeError(loginForm,"sucsess","")
       inputError(emailInput,'sucsess','')
       emailInput.parentElement.querySelector('.form-input-error-messege').classList.add('form-messege-sucsess')
       inputError(passwordInput,'error' ,"Wrong password. Try again or click 'Forgot password' to reset it")
     break;
       
     } else{
           p.preventDefault()
      setMessegeError(loginForm,"error","Incorrect Email/password")
        inputError(emailInput,  'error' ,'Enter a valid Email')
        inputError(passwordInput,'error' ,"Wrong password. Try again or click 'Forgot password' to reset it")
         
          }
       
        
    }
        


//end of submit sig in function
    })

//let
  let username = document.getElementById('username');
  let emailInputsign =   document.getElementById('emailInput-sign');
  let passwordInputsign = document.getElementById('passwordInput-sign');
  let comPasswordInputsign = document.getElementById('comPasswordInput-sign');
//let
   

//take data
let dataaccount;
if(localStorage.Accounts != null || localStorage.Accounts != undefined ){
  dataaccount = JSON.parse(localStorage.Accounts);
}else{
  dataaccount = [{username:".",email:".....",pass:"....."}];
  
}

//take data

//createAccountForm
createAccountForm.addEventListener('submit',(p)=>{
  
  if(username.value !=='' && emailInputsign.value !=='' && passwordInputsign.value !=='' && comPasswordInputsign.value !=='' && moodUsername !== 'error' &&moodEmail !== 'error'&& comfirmPass === 'sucsess'){
    
    let setaccount = 
    {
      username:username.value.toLowerCase(),
      email:emailInputsign.value.toLowerCase(),
      pass:passwordInputsign.value
    }
    
    dataaccount.push(setaccount);
    localStorage.setItem('Accounts' , JSON.stringify(dataaccount));
    
    
        window.location.href = '../index.html';

       p.preventDefault()
       
      }
      else{
        p.preventDefault()
        inputError(username,'error','Enter The Username')
        inputError(emailInputsign,'error','Enter The Email')
        inputError(passwordInputsign,'error','Enter The Password')
        
      }

      ///inputsucsess
      let inputSucsessSign =[passwordInputsign,comPasswordInputsign]  
      function inputSucsess(){
      for (let i = 0; i < inputSucsessSign.length; i++) {
      
           if(inputSucsessSign[i].value.length >= 1){
        inputError(inputSucsessSign[i],'sucsess','')
        }
       
       
      }
}inputSucsess()
      

//userSame
      if(moodUsername === 'error'){
  p.preventDefault()
  inputError(username,'error','This Username Already used')
                username.classList.remove('input-form-sucsess')
}else if(username.length > 1){
  inputSucsess()
}
else if(username.value ===''){
  inputError(username,'error','Enter The Username')
}
else
{inputError(username,'sucsess',"") ;
  username.classList.remove('input-form-error')
 
} 


// emailSame 
if(moodEmail === 'error'){
  p.preventDefault()
  inputError(emailInputsign,'error','This Email Already used')
  emailInputsign.classList.remove('input-form-sucsess')
}else if(emailInputsign.lenth > 1){
  inputSucsess()
}
else if(emailInputsign.value ===''){
  inputError(emailInputsign,'error','Enter The Email')
    
}
else
{
  inputError(emailInputsign,'sucsess',"") ;
emailInput.classList.remove('input-form-error')
} 
       

//comfirm passwor
if (comfirm === 'false') {

inputError(comPasswordInputsign,'error','Comfirm Password')
}

if (passwordInputsign.value !=='' && comPasswordInputsign.value !=='') {
  if (comfirmPass === 'false') {
   
inputError(comPasswordInputsign,'error','Those password is Not same.Try Again.')
comPasswordInputsign.classList.remove('input-form-sucsess')
  }
  else  {
    
    inputError(comPasswordInputsign,'sucsess','')
comPasswordInputsign.classList.remove('input-form-error')
  }

} 
 cleardatasign()

//end createAccountForm
}) 




//userSame // emailSame 
let moodUsername ;
let moodEmail ;
 username.oninput = function(){
for (let i = 0; i < dataaccount.length; i++) {
 
   
     
     
               if (username.value.toLowerCase() == dataaccount[i].username) {
                inputError(username,'error','This Username Already used')
                username.classList.remove('input-form-sucsess')

moodUsername = 'error';
                      break;
              }



else if(username.value !=''){

moodUsername = 'sucsess';
            inputError(username,'sucsess',"") ;
            username.classList.remove('input-form-error')
         }

    
  }
}
  
  // emailSame 

  emailInputsign.oninput = function(){
for (let i = 0; i < dataaccount.length; i++) {

    if (emailInputsign.value.toLowerCase() == dataaccount[i].email) {

     inputError(emailInputsign,'error','This Email Already used')
     emailInputsign.classList.remove('input-form-sucsess')
moodEmail = 'error';
break;

   }

else  if(emailInputsign.value !=''){

moodEmail = 'sucsess';
 inputError(emailInputsign,'sucsess',"") ;
 emailInputsign.classList.remove('input-form-error')

}


}
}


//confirmpassword


let inputSucsessSign =[passwordInputsign,comPasswordInputsign]  
let messegeofpass =['Enter the Password','Comfirm Password']  
for (let i = 0; i < inputSucsessSign.length ; i++) {
  inputSucsessSign[i].oninput = function(){
  if (inputSucsessSign[i].value !='') {
    
   inputError(inputSucsessSign[i],'sucsess','')
  } 
}

}

 
let comfirm  ;
let comfirmPass  ;

passwordInputsign.onkeyup = function comfirmPasswordInput(){
  if (passwordInputsign.value !='' && comPasswordInputsign.value ==='' ) {
    comfirm = 'false'
}


else if(passwordInputsign.value !='' && comPasswordInputsign.value !==''){
  comfirm = 'sucsess'
}

}
comPasswordInputsign.onkeyup = function comfirmComPasswordInput(){

if (passwordInputsign.value !== comPasswordInputsign.value) {
  comfirmPass = 'false'
}
else if(passwordInputsign.value === comPasswordInputsign.value) {
  comfirmPass = 'sucsess'
}  

}

// clear data


function cleardatasign(){
          if (username.value !=='' && emailInputsign.value !=='' && passwordInputsign.value !=='' && comPasswordInputsign.value !=='' && moodUsername !== 'error' &&moodEmail !== 'error'&& comfirmPass === 'sucsess') {
             username.value= ''
 emailInputsign.value= ''
 passwordInputsign.value= ''
   comPasswordInputsign.value= ''
   inputError(emailInputsign,'sucsess','')
   inputError(passwordInputsign,'sucsess',"") ;
          }

}

})
