// Add JavaScript for the lightbox functionality
const galleryImages=document.querySelectorAll(".gallery-image"),lightbox=document.querySelector(".lightbox"),lightboxImage=document.createElement("img");galleryImages.forEach(((e,l)=>{e.addEventListener("click",(()=>{lightboxImage.src=e.src,lightbox.appendChild(lightboxImage),document.body.appendChild(lightbox),lightbox.style.display="block"}))})),lightbox.addEventListener("click",(()=>{lightbox.style.display="none",lightboxImage.remove()}));


/*const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.createElement('img');

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        lightboxImage.src = image.src;
        lightbox.appendChild(lightboxImage);
        document.body.appendChild(lightbox);
        lightbox.style.display = 'block';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImage.remove();
});
*/
