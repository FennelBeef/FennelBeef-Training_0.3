window.addEventListener("load", function () {
  var box = document.querySelector(".box");
  var mask = document.querySelector(".mask");
  var box2 = document.querySelector(".box2");
  box.addEventListener("mouseover", function () {
    mask.style.display = "block";
    box2.style.display = "block";
  });
  box.addEventListener("mouseout", function () {
    mask.style.display = "none";
    box2.style.display = "none";
  });
  box.addEventListener("mousemove", function (e) {
    var x = e.pageX - this.offsetLeft-200;
    var y = e.pageY - this.offsetTop;
    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2;
    var maskMax = box.offsetHeight - mask.offsetHeight;
    if (maskX < 0) {
      maskX = 0;
    }
    if (maskY < 0) {
      maskY = 0;
    }
    if (maskX > maskMax) {
      maskX = maskMax;
    }
    if (maskY > maskMax) {
      maskY = maskMax;
    }
    mask.style.left = maskX + "px";
    mask.style.top = maskY  + "px";
    //大图片移动
    var img = document.querySelector(".BigImg");
    var bigMax = img.offsetWidth - box2.offsetWidth;

    var bigx = maskX * bigMax;
    var bigy = maskY * bigMax;
    // bigMax / maskMax是两图片之间的倍数
    img.style.left = -maskX * (bigMax / maskMax) + "px";
    img.style.top = -maskY * (bigMax / maskMax) + "px";
  });
});
