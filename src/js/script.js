// lightbox ------------------------------------

const lightbox = document.querySelector(".lightbox");

console.log("ola mundo");

lightbox.addEventListener("click", function () {
  console.log("apertou na área");
});

window.addEventListener("click", function (event){
    if(event.target == lightbox){
        lightbox.style.display = "none"
    }
})

const largeImage = document.querySelector(".large-image");
largeImage.addEventListener("click", function () {
  lightbox.style.display = "flex";
});

const close = document.querySelector(".close");

close.addEventListener("click", function () {
  lightbox.style.display = "none";
});

const previousLightbox = document.querySelector(".lightbox .div-previous");
const nextLightbox = document.querySelector(".lightbox .div-next");
const largeImageLightbox = document.querySelector(".lightbox .large-image");
let countLightbox = 1;

const arraySrcImageProduct = [
  "./src/img/image-product-1.jpg",
  "./src/img/image-product-2.jpg",
  "./src/img/image-product-3.jpg",
  "./src/img/image-product-4.jpg",
];

function changeImageLightbox(operacao) {
  countLightbox = countLightbox + operacao;
  if (countLightbox == 0) {
    countLightbox = 4;
  }
  if (countLightbox == 5) {
    countLightbox = 1;
  }
  largeImageLightbox.src = arraySrcImageProduct[countLightbox - 1];
}

previousLightbox.addEventListener("click", function () {
  changeImageLightbox(-1);
});

nextLightbox.addEventListener("click", function () {
  changeImageLightbox(+1);
});

// product desktop -------------------------------------------

let countProductDesktop = 1;
const largeImageProductDesktop = document.querySelector(".product-desktop .large-image img");
const thumbnailDesktopDivs = document.querySelector(".thumbnail-images").querySelectorAll("div");
const thumbnailDesktopDiv1 = thumbnailDesktopDivs[0];
const thumbnailDesktopDiv2 = thumbnailDesktopDivs[1];
const thumbnailDesktopDiv3 = thumbnailDesktopDivs[2];
const thumbnailDesktopDiv4 = thumbnailDesktopDivs[3];

function setBorderAndOpacity(index) {
  const thumbnailDiv = thumbnailDesktopDivs[index];
  thumbnailDiv.classList.add("border");
  const activeImg = thumbnailDiv.querySelector("img");
  activeImg.classList.add("active");
}

function resetThumbnailImagesBorderAndOpacity() {
  // remover a borda e depois a classe active
  thumbnailDesktopDivs.forEach(function (elementDiv) {
    if (elementDiv.classList.contains("border")) {
      const activeImg = elementDiv.querySelector("img");
      activeImg.classList.remove("active");
    }
    elementDiv.classList.remove("border");
  });
}

function changeLargeImageProductDesktop(index) {
  largeImageProductDesktop.src = arraySrcImageProduct[index];
}

thumbnailDesktopDiv1.addEventListener("click", function () {
  changeLargeImageProductDesktop(0);
  resetThumbnailImagesBorderAndOpacity();
  setBorderAndOpacity(0);
});

thumbnailDesktopDiv2.addEventListener("click", function () {
  changeLargeImageProductDesktop(1);
  resetThumbnailImagesBorderAndOpacity();
  setBorderAndOpacity(1);
});

thumbnailDesktopDiv3.addEventListener("click", function () {
  changeLargeImageProductDesktop(2);
  resetThumbnailImagesBorderAndOpacity();
  setBorderAndOpacity(2);
});

thumbnailDesktopDiv4.addEventListener("click", function () {
  changeLargeImageProductDesktop(3);
  resetThumbnailImagesBorderAndOpacity();
  setBorderAndOpacity(3);
});

// desktop cart ---------------------------------------------------

const spanNumberProductDesktop = document.querySelector(".product-desktop .input-number span");
const minusIconProductDesktop = document.querySelector(".product-desktop .input-number .minus");
const plusIconProductDesktop = document.querySelector(".product-desktop .input-number .plus");
const cartImgDesktop = document.querySelector(".header-desktop .cart-and-avatar .cart");
const cartDivAndDesktop = document.querySelector(".header-desktop .cart-div.desktop");
let numberSpanGlobal = 0;

function changeNumberSpan(number) {
  const numberSpan = Number(spanNumberProductDesktop.innerText);
  const result = numberSpan + number;
  spanNumberProductDesktop.innerText = result;
  numberSpanGlobal = result;
  if (result == -1) {
    console.log("estou sendo acessado o if");
    spanNumberProductDesktop.innerText = "0";
    numberSpanGlobal = 0;
  }

}

minusIconProductDesktop.addEventListener("click", function () {
  changeNumberSpan(-1);
});
plusIconProductDesktop.addEventListener("click", function () {
  changeNumberSpan(1);
});

cartImgDesktop.addEventListener("click", function () {
  if (cartDivAndDesktop.style.display == "none") {
    cartDivAndDesktop.style.display = "block";
  } else{
    cartDivAndDesktop.style.display = "none"
  }
});


const divCartItem = document.querySelector(".header-desktop .cart-item") //nível 0

function mountCartItemElement(divCartItem){
  divCartItem.innerHTML = ""
  if(numberSpanGlobal == 0){
    return
  }
  
  const imgProduct = document.createElement("img") // nível 1
  imgProduct.src = "./src/img/image-product-1-thumbnail.jpg"
  imgProduct.classList.add("image-product")

  const divcartDescription = document.createElement("div") // nível 1
  divcartDescription.classList.add("cart-description")
  const cartDescriptionH3 = document.createElement("h3") //nível 2
  cartDescriptionH3.innerText = "Fall Limited Edition Sneakers"
  const cartDescriptionP = document.createElement("p") // nível 2
  cartDescriptionP.innerHTML= "<p class='price'>$125.00 x <span>" + numberSpanGlobal + "</span><span style='font-weight: 800'> = $" +
  (125.00 * numberSpanGlobal).toFixed(2) + "</span></p>"
  cartDescriptionP.classList.add("price")
  divcartDescription.append(cartDescriptionH3, cartDescriptionP)
  

  const imgIconDelete = document.createElement("img") //nível 1
  imgIconDelete.src = "./src/img/icon-delete.svg"
  imgIconDelete.classList.add("delete")

  divCartItem.append(imgProduct, divcartDescription, imgIconDelete)
}


const btnCheckoutDesktop = document.querySelector(".product-desktop .input-number-and-button-cart button")
btnCheckoutDesktop.addEventListener("click", function (){
  mountCartItemElement(document.querySelector(".header-desktop .cart-item"))
})

const deleteIconDesktop = document.querySelector(".header-desktop .cart-item .delete")
deleteIconDesktop.addEventListener("click", function(){
  divCartItem.innerHTML = ""
})

// mobile ( trocar imagens) -------------------------------------------------

const largeImageMobile = document.querySelector(".product-mobile .image-product");
const previousIconMobile = document.querySelector(".product-mobile .previous-div");
const nextIconMobile = document.querySelector(".product-mobile .next-div");
let countMobile = 1;

function changeImageProductMobile(operacao) {
  countMobile = countMobile + operacao;
  if (countMobile == 0) {
    countMobile = 4;
  }
  if (countMobile == 5) {
    countMobile = 1;
  }
  largeImageMobile.src = arraySrcImageProduct[countMobile - 1];
}

previousIconMobile.addEventListener("click", function () {
  changeImageProductMobile(-1);
});
nextIconMobile.addEventListener("click", function () {
  changeImageProductMobile(1);
});
