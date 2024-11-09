document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('relatedProducts');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const galleryItems = gallery.children;
    const totalItems = galleryItems.length;
    let currentIndex = 0;

    function getItemWidth() {
        // Dynamically calculate the width of each item, including the margin
        const itemWidth = galleryItems[0].offsetWidth + 20; // 20px margin between items
        return itemWidth;
    }

    function getVisibleItemsCount() {
        // Dynamically calculate how many items can fit in the viewport
        const galleryWidth = gallery.offsetWidth;
        const itemWidth = getItemWidth();
        return Math.floor(galleryWidth / itemWidth); // Return the number of visible items
    }

    function updateGalleryPosition() {
        const itemWidth = getItemWidth();
        gallery.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // Previous Button
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateGalleryPosition();
        }
    });

    // Next Button
    nextButton.addEventListener('click', () => {
        const visibleItems = getVisibleItemsCount();
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            updateGalleryPosition();
        }
    });

    // Recalculate on window resize to handle responsiveness
    window.addEventListener('resize', () => {
        updateGalleryPosition();  // Update position on window resize
    });
});