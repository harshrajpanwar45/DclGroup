let form=document.getElementById("form");

console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let loginName=document.getElementById("email").value;
    let loginPassword= document.getElementById("pwd").value;
    
    let username=localStorage.getItem("username");
    let pwd=localStorage.getItem("password");
    if(loginName===""|| loginPassword===""){
        alert("fill the details");
    }else if(username===username && pwd===loginPassword){
        window.open("./Home.html");
    window.location.reload();
    }
     else {
    alert("password does not matched");
  }

});