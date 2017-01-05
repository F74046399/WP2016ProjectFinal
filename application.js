$(document).ready(function(){
  
  //edit block in the banner
  function div_show(){
    document.getFlementById('block1').style.display ="block"; 
  }
  function div_hide(){
    document.getFlementById('block1').style.display ="none"; 
  }
  $("#title").on("click",function(){
      div_show();
 });
}
