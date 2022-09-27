let topnav = Array.from(document.querySelectorAll('.active_tnav'))







topnav.forEach((element) => {
    element.addEventListener('click', () => {
        topnav.forEach((element) => {
            element.classList.remove('activated')
        })

        element.classList.add('activated')
    })

})


let input_pop_up = false;
function inputpopup(){
    if(input_pop_up ===false){
        document.querySelector('.inputpop').style.visibility = "visible"
        document.querySelector('.inputpop').classList.add('drop_animation');
        
    input_pop_up = true;
}
else{
    document.querySelector('.inputpop').style.visibility = "hidden";
    document.querySelector('.inputpop').classList.remove('drop_animation');
    input_pop_up = false;
}
}

let scrollvalueoflogin=100;
function log_in() {
    if(scrollvalueoflogin>0)   
    {

        scrollvalueoflogin -=2;
        document.querySelector('.loginpage').style.left = scrollvalueoflogin +'%';
        requestAnimationFrame(log_in)
    }

}
function log_out() {
    if(scrollvalueoflogin<=100)   
    {

        scrollvalueoflogin +=2;
        document.querySelector('.loginpage').style.left = scrollvalueoflogin +'%';
        requestAnimationFrame(log_out)
    }
    else{
        document.querySelector('.loginpage').style.visibility = 'hidden'
    }

}
function login_click(){
    if( scrollvalueoflogin<=0){
        log_out()
            

    }
    else{
        document.querySelector('.loginpage').style.visibility = 'visible'
        log_in();

    }
}




//loading done!!!!
onload =()=>{
    document.getElementById('loader').style.visibility ='hidden';
}

