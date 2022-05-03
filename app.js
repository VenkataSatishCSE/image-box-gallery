var mainImg = document.getElementById('main');

var subImg = document.getElementById('sub').getElementsByTagName('img');

for(var i=0; i < subImg.length; i++){
    subImg[i].addEventListener('click',full_image);
}

function full_image() {
    var images = this.getAttribute('src');

    mainImg.innerHTML = "<img src="+images+">";
}
console.log(subImg.length)