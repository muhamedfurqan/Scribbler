// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("signInModal");



//Get modalContent
var modalContent =document.getElementsByClassName('modal-content')[0];

var modalContent2 =document.getElementsByClassName('modal-content')[1];

//Get form content
var formContent =document.getElementsByClassName('form-content')[0];

var formContent2 =document.getElementsByClassName('form-content')[1];


// Get the button that opens the modal
var btn = document.getElementById("signUp");
var btn2 = document.getElementById("signIn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];



// When the user clicks on the button, open the modal
btn.onclick = function () {

    modal.style.display = "flex";
    modal.style.flexDirection="column";
    modal.style.justifyContent="center";
    modal.style.alignContent="center";

    modalContent.style.display="flex";
    modalContent.style.flexDirection="column";
    modalContent.style.justifyConten="center";
    modalContent.style.alignContent="center";
 
    formContent.style.display="flex";
    formContent.style.flexDirection="column";
    formContent.style.justifyConten="center";
    formContent.style.alignContent="center";
 
}
btn2.onclick = function () {

    modal2.style.display = "flex";
    modal2.style.flexDirection="column";
    modal2.style.justifyContent="center";
    modal2.style.alignContent="center";

    modalContent2.style.display="flex";
    modalContent2.style.flexDirection="column";
    modalContent2.style.justifyConten="center";
    modalContent2.style.alignContent="center";
 
    formContent2.style.display="flex";
    formContent2.style.flexDirection="column";
    formContent2.style.justifyConten="center";
    formContent2.style.alignContent="center";
 
}





// When the user clicks on <span> (x), close the modal
span.onclick =function() {
    modal.style.display = "none";
  }
span2.onclick =function () {
    modal2.style.display = "none";
  }




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal||event.target == modal2) {
    modal.style.display = "none";
  }
}



//Goto signup page from signin page


var btn3=document.getElementById('not_member');
btn3.onclick=function(){

modal2.style.display="none";
modal.style.display = "flex";
    modal.style.flexDirection="column";
    modal.style.justifyContent="center";
    modal.style.alignContent="center";

    modalContent.style.display="flex";
    modalContent.style.flexDirection="column";
    modalContent.style.justifyConten="center";
    modalContent.style.alignContent="center";
 
    formContent.style.display="flex";
    formContent.style.flexDirection="column";
    formContent.style.justifyConten="center";
    formContent.style.alignContent="center";



}

