console.log('Loaded!');
var element=document.getElementById('main-text')
var img =document.getElementById('madi')
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=margLeft+'px';
}
img.onclick=function () {
    var interval=setInterval(moveRight,50);
};