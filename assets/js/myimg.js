const myImg = ["my1.jpg","my2.jpg","my3.jpg","my4.jpg","my5.jpg","my6.jpg","my7.jpg","my8.jpg","my9.jpg","my10.jpg"];
const imgPlace = document.querySelector(".my-img")
let currentIndex = 0;

function imgPick(){
    if(currentIndex<myImg.length-1){
    imgPlace.src = `images/my/${myImg[currentIndex]}`;
    currentIndex++;
    }else{
        imgPlace.src = `images/my/${myImg[currentIndex]}`;
        currentIndex = 0;   
    }
}
imgPick();
setInterval(imgPick,3500);

