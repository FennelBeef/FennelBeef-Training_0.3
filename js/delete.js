// var p_delete = document.querySelectorAll(".p-delete");
// var tbody = document.querySelector(".tbody");
// p_delete.addEventListener("click",function(){
// tbody.removeChild(this.parentNode);
// })
console.log("删除链接成功");
var p_delete = document.querySelectorAll(".p-delete");
var tbody = document.querySelector(".tbody");
for (var len = 0; len < p_delete.length; len++) {
  p_delete[len].onclick = function () {
    tbody.removeChild(this.parentNode);

    
  };
}


var input = document.querySelector("input");

var log = 0;
var inputs = document.querySelectorAll("input");

input.addEventListener("click",function(){
  
 
  if (log== 0) {
    console.log("awxl");
     for (var len = 0; len < inputs.length; len++) {
       inputs[len].checked = true;
     }
     log=1;
  }
  else {
    console.log("qwq");
    for (var len = 0; len < inputs.length; len++) {
      inputs[len].checked = false;
    }
    log=0;
  }
 
})

// input[len].onclick = function () {};
// for (var len = 0; len < input.length; len++) {
  
// }
