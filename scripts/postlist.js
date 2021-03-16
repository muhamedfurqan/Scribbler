



function deletepopup(x){
    console.log(x);
   
   var modal =document.getElementsByClassName('deletemodal')[0];
   var modalContent=document.getElementsByClassName('modalcontent')[0];
    modal.style.display="flex";
    modal.style.flexDirection="column";
    modal.style.justifyContent="center";
    modal.style.alignContent="center";
    
    modalContent.style.display="flex";
    modalContent.style.flexDirection="column";
    modalContent.style.justifyContent="center";
    modalContent.style.alignContent="center";
    var para=modalContent.getElementsByTagName('p')[0];
    para.style.textAlign="center";
    para.style.fontSize="30px";

    var deleteButton=document.getElementById('delete');
    var nodeleteButton=document.getElementById('dontdelete');

    nodeleteButton.onclick=function(){
        modal.style.display="none";
    } 

    deleteButton.onclick=function(){
        var data=document.getElementsByClassName('column')[x];
        console.log(data);
        data.style.display="none";
        modal.style.display="none";
    }   
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
  
    
    
    
        
    
    }

    

    









