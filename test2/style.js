document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg'
    ];

    let currentIndex = 0;

    function showNextImage() {
        const imageContainer = document.querySelector('.image-container img');
        if (currentIndex < images.length) {
            imageContainer.src = images[currentIndex];
            currentIndex++;
        }
    }

    setInterval(showNextImage, 2000); // Change the interval as needed (in milliseconds)
});
