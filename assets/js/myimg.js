const myImg = ["my1.jpg","my2.jpg","my3.jpg","my4.jpg","my5.jpg","my6.jpg","my7.jpg","my8.jpg","my9.jpg","my10.jpg"];
const imgPlace = document.querySelector(".my-img")

//클로저
function makeCounter(){
    let currentIndex = 0;

    return function () {
        if(currentIndex == myImg.length-1){
           return currentIndex = 0;
       }
        return ++currentIndex;
       
    };
    
}
let counterIndex = makeCounter();

function imgPick(){    
    imgPlace.src = `images/my/${myImg[counterIndex()]}`;
}
imgPick();
setInterval(imgPick,3500);

