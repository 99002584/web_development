function validate(){

if(document.getElementById("uname").value==""){
       alert("Enter your Name");
      //   v1=document.getElementById("uname").value;
      //  if(v1.length<=5){
      //    alert("please enter more characters");

      //  }
        document.registerform.username.focus();
   }


else if(document.getElementById("email").value==""){
      alert("Enter your email");
      document.registerform.uage.focus();
 }


else if(document.getElementById("psw").value==""){
      alert("Enter Password");
      document.registerform.password.focus();
 }

 else if(document.getElementById("pn").value==""){
    alert("Enter Phone number");
    document.registerform.password.focus();
}






else{
    validateuser();

 }

 }


function validateuser(){
var array=["girish","mahesh","suresh","harish"];
var flag=0;

var ele=document.getElementById("uname").value;


for(let i=0;i<array.length;i++){
   if(ele==array[i])
 {
       flag=1;
     break;
 }

 }

if(flag==1){
 alert("choose different name");
 }

else{
 document.registerform.submit();
 
 }
 }





