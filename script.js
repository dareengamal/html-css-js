
const imageContainer = document.querySelector('.image-container');
const imageTitleElement = document.getElementById('imageTitle');
const imageDescriptionElement = document.getElementById('imageDescription');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

const images = [
    {
        url: 'images/one.jpg',
        title: 'Beautiful Landscape',
        description: 'A stunning landscape with mountains and a lake.'
    },
    {
        url: 'images/two.webp',
        title: 'City Skyline',
        description: 'A view of a city skyline during sunset.'
    },

    {
        url: 'images/two.webp',
        title: 'City Skyline',
        description: 'A view of a city skyline during sunset.'
    },
    // Add more image objects here
];

let currentImageIndex = 0;

function displayImage(index) {
    const currentImage = images[index];
    imageContainer.innerHTML = `<img class="image" src="${currentImage.url}" alt="${currentImage.title}">`;
    imageTitleElement.textContent = currentImage.title;
    imageDescriptionElement.textContent = currentImage.description;
}

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    displayImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    displayImage(currentImageIndex);
});

imageContainer.addEventListener('click', () => {
    imageDetails.style.display = 'block';
});

displayImage(currentImageIndex);
