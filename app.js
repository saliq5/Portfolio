const butt= document.getElementById("submit-btn");
const frm = document.getElementById("mf");
const hid= document.getElementById("hid");

butt.addEventListener("click", (e)=>{
    frm.style.display ='none';
    hid.classList.add("active");
});