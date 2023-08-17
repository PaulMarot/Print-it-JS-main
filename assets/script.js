const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const path = "./assets/images/slideshow/"
const imgs = document.querySelectorAll('.banner img');
const suivant = document.querySelectorAll('.arrow_right')[0];
const precedent = document.querySelectorAll('.arrow_left')[0];
const points = document.querySelectorAll('.dot');
const sliderImage = document.querySelector('#slider-image');
let imageIndex = 0




// premiere solution avec deux functions
function rightButton(){
	if(imageIndex < slides.length-1){
	imageIndex++
	}
	else{
		imageIndex = 0
	}
	sliderImage.setAttribute("src",path+slides[imageIndex].image)
}

function leftButton(){
	if(imageIndex > 0){
	imageIndex--
	}
	else{
		imageIndex = slides.length-1
	}
	sliderImage.setAttribute("src",path+slides[imageIndex].image)
}


// seconde solution avec une seule function
function changeImage(direction) {
    if (direction === 1) {
        imageIndex = (imageIndex + 1) % slides.length;
    } else {
        imageIndex = (imageIndex - 1 + slides.length) % slides.length;
    }

    sliderImage.setAttribute("src", path + slides[imageIndex].image);
}
suivant.addEventListener('click', () => changeImage(1));
precedent.addEventListener('click', () => changeImage(0));


// key clavier pour fair defiler les images.
document.addEventListener('keydown', keyPressed);
function keyPressed(e) {
    if (e.keyCode === 37) {
        changeImage(0); 
    } else if (e.keyCode === 39) {
        changeImage(1); 
    }
}

//


// Fonction pour changer l'image en fonction de l'index du point cliqué
function changeImageByPoint(index) {
    imageIndex = index;
    sliderImage.setAttribute("src", path + slides[imageIndex].image);
}

// Ajouter des écouteurs d'événements aux points
points.forEach((point, index) => {
    point.addEventListener('click', () => {
        changeImageByPoint(index);
    });
});