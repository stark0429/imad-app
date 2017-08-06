console.log('Loaded!');
var element=document.getElementById('main-text')
var img =document.getElementById('madi')
var margLeft=0;
function moveRight(){
    margLeft=margLeft+10;
    img.style.margeft=margLeft+'px';
}
img.onclick=function () {
    var interval=setInterval(moveRight,50);
};