console.log("connected");
let String1 = "";
let buttons = document.querySelectorAll(".buttons");
buttons.forEach((button)=>{
    button.addEventListener("click" ,(e)=>{
        if(e.target.innerHTML === "="){
            document.querySelector("#in").value = eval(String1);
        }
        else if(e.target.innerHTML === "C"){
            String1 = "";
            document.querySelector("#in").value = String1;
        }
        else if(e.target.innerHTML === "DEL"){
            String1 = String1.slice(0,-1);
            document.querySelector("#in").value = String1;
        }
        else{
            String1 = String1 + e.target.innerHTML;
            document.querySelector("#in").value = String1;
        }
    })
})
