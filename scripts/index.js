//-----------------------------------

var createPostsModal=document.getElementsByClassName("modal")[2];
var modalContent=document.getElementsByClassName('modal-content')[2];






var createPostButton=document.getElementsByClassName('formButton')[1];

var span=document.getElementsByClassName('close')[2];

    createPostButton.onclick=function(){
    createPostsModal.style.display = "flex";
    createPostsModal.style.flexDirection="column";
    createPostsModal.style.justifyContent="center";
    createPostsModal.style.alignContent="center";

    modalContent.style.display="flex";
    modalContent.style.flexDirection="column";
    modalContent.style.justifyConten="center";
    modalContent.style.alignContent="center";
}

span.onclick =function() {
    createPostsModal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == createPostsModal) {
      createPostsModal.style.display = "none";
    }
  }