const cart = {
  quantity: 0,
  price: 0,
  total: 0,
  makeTotal:function(){
    this.total = this.quantity + this.price;
    console.log(this.total);
  },
  emptyCart:function(){
  },
};
const images = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
const back_arrow = document.querySelector(".pictures figure span:nth-of-type(1) img");
const next_arrow = document.querySelector(".pictures figure span:nth-of-type(2) img");
let index = 0;
next_arrow.addEventListener("click",()=>{
  if(index < images.length -1){
    index += 1;
  }
  else if(index >= images.length -1){
    index = 0;
   }
   main_picture.src = images[index];
});
back_arrow.addEventListener("click",()=>{
  if(index > 0){
    index -= 1;
  }
  else if(index == 0){
    index = images.length-1;
   }
   main_picture.src = images[index];
});

// change the big picture
const main_picture = document.querySelector("#main-pic");
const thumbnails = document.querySelectorAll(".thumbnails figure img");
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click",()=>{
    thumbnails.forEach((item) => {
        item.classList.remove("active-thumbnail");
    });
    main_picture.src = thumbnail.src.slice(0,81)+".jpg";
    thumbnail.classList.toggle("active-thumbnail");
  });
});

// show cart card by clicking on the avatar or cart image
const body = document.querySelector("body");
const cart_images = document.querySelectorAll(".cart figure img");
const cart_card = document.querySelector(".cart-card");
cart_images.forEach((img) => {
  img.addEventListener("click",()=>{
    cart_card.classList.toggle("hidden");
  });
});

// Responsive navbar opening and closing
const container = document.querySelector(".container");
const close_btn = document.querySelector(".links li img");
const navbar = document.querySelector(".links");
const modal = document.querySelector(".modal");
close_btn.addEventListener("click",()=>{
  navbar.classList.add("hidden");
  modal.classList.remove("modal");
});
const hamburger_menu = document.querySelector(".hamburger-menu");
hamburger_menu.addEventListener("click",()=>{
  navbar.classList.toggle("hidden");
  modal.classList.add("modal");
});

// cart functions
const subtract = document.querySelector(".add-to-cart figure:nth-of-type(1)");
const add = document.querySelector(".add-to-cart figure:nth-of-type(2)");
const quantity = document.querySelector(".add-to-cart .quantity");
const add_to_cart = document.querySelector(".add-to-cart .add-btn");
const description = document.querySelector(".description h1");
const paragraph = document.querySelector(".cart-card p");
const price = document.querySelector(".price h3");
const moltiplication = document.querySelector(".moltiplication");
const total = document.createElement("span");
const empty_cart = document.querySelector(".cart-card .card-body img:nth-of-type(2)");
const btn_checkout = document.querySelector(".cart-card .add-btn");
// const total = document.querySelector(".total");
console.log(total);
add.addEventListener("click",()=>{
  quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
  quantity.style.fontWeight = 700;
});

subtract.addEventListener("click",()=>{
  if(parseInt(quantity.innerHTML) > 0){
    quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
    if(parseInt(quantity.innerHTML) == 0){
      quantity.style.fontWeight = 400;
    }
  }
});

add_to_cart.addEventListener("click",()=>{
  if(parseInt(quantity.innerHTML) > 0){
    cart.price = parseInt(price.innerHTML.slice(1));
    cart.quantity = parseInt(quantity.innerHTML);
    cart.makeTotal();
    empty_cart.classList.remove("hidden");
    total.classList.add("total");
    img = document.querySelector(".cart-card img");
    img.src = "images/image-product-1-thumbnail.jpg";
    img.classList.remove("hidden");
    paragraph.innerHTML = `${description.innerHTML}`;
    paragraph.classList.remove("empty-p");
    paragraph.classList.add("full-p");
    btn_checkout.classList.remove("hidden");
    moltiplication.innerHTML = `${cart.price} x ${cart.quantity}`;
    total.innerHTML =`$${cart.total}`;
    moltiplication.appendChild(total);
  }
});

empty_cart.addEventListener("click",()=>{
  empty_cart.classList.add("hidden");
  cart.price = 0;
  cart.quantity = 0;
  cart.total = 0;
  img.src = "";
  img.classList.add("hidden");
  paragraph.classList.add("empty-p");
  paragraph.classList.remove("full-p");
  paragraph.innerHTML = "Your cart is empty";
  moltiplication.removeChild(total);
  moltiplication.innerHTML = "";
  btn_checkout.classList.add("hidden");
});
