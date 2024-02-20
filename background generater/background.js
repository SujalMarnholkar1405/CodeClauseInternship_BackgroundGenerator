const colorone=document.getElementById("colorone");
const colortwo=document.getElementById("colortwo");
const bgcolor=document.getElementById("bgcolor");

colorone.addEventListener('input',function(){
   bgcolor.style.background = 
   `linear-gradient(to right, ${colorone.value} ,${colortwo.value},blue)`;
});

colortwo.addEventListener('input',function(){
    bgcolor.style.background = 
    `linear-gradient(to right, ${colorone.value} ,${colortwo.value})`;
 });