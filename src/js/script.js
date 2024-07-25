// lightbox ------------------------------------

const lightbox = document.querySelector(".lightbox")

console.log("ola mundo")


lightbox.addEventListener("click", function (){
    console.log("apertou na área")
})

window.addEventListener("click", function (event){
    if(event.target == lightbox){
        lightbox.style.display = "none"
    }
})

const largeImage = document.querySelector(".large-image")
largeImage.addEventListener("click", function(){
    lightbox.style.display = "flex"
})

const close = document.querySelector(".close")

close.addEventListener("click", function (){
    lightbox.style.display = "none"
})

const previousLightbox = document.querySelector(".lightbox .div-previous")
const nextLightbox = document.querySelector(".lightbox .div-next")
const largeImageLightbox = document.querySelector(".lightbox .large-image")
let countLightbox = 1

const arraySrcImageProduct = [
    "./src/img/image-product-1.jpg" ,
    "./src/img/image-product-2.jpg",
    "./src/img/image-product-3.jpg",
    "./src/img/image-product-4.jpg"

]

function changeImageLightbox(operacao){
    countLightbox = countLightbox + operacao
    if(countLightbox == 0){
        countLightbox = 4
    }
    if(countLightbox == 5){
        countLightbox = 1
    }
    largeImageLightbox.src = arraySrcImageProduct[countLightbox -1]

}

previousLightbox.addEventListener("click", function (){
    changeImageLightbox(-1)
})

nextLightbox.addEventListener("click", function(){
    changeImageLightbox(+1)
})


// product desktop -------------------------------------------

let countProductDesktop = 1
const largeImageProductDesktop = document.querySelector(".product-desktop .large-image")

function changeLargeImageProductDesktop(index){
    largeImageProductDesktop.src = arraySrcImageProduct[index]
}

const thumbnailDesktopDiv = document.querySelector("thumbnail-images").querySelectorAll("div") //erro aqui
const thumbnailDesktopDiv1 = thumbnailDesktopDiv[0]
const thumbnailDesktopDiv2 = thumbnailDesktopDiv[1]
const thumbnailDesktopDiv3 = thumbnailDesktopDiv[2]
const thumbnailDesktopDiv4 = thumbnailDesktopDiv[3]

thumbnailDesktopDiv2.addEventListener("click", function(){
    changeLargeImageProductDesktop(1)
})




