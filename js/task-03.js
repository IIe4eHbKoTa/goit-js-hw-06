const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector(".gallery");

const markup = images
.map((image) => `<li class="gallery_image"><img src="${image.url}" alt="${image.alt}"></li>`)
.join("");


gallery.insertAdjacentHTML("beforeend", markup);


const galleryImages = document.querySelectorAll(".gallery_image img")

galleryImages.forEach((img) => {
  img.style.width = "300px";
  img.style.heigth= "auto";
  img.style.position = "relative";
  img.style.left = "200px"; 
  img.style.top = "10px"
  img.style.border = "4px solid black";
});


