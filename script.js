// Console check
console.log("SRD Design Website Loaded Successfully");

// Future mein yahan Navbar scroll effect aur Lightbox ka code aayega.


// Load More Services Functionality
document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if(loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // 1. Select all hidden services
            const hiddenServices = document.querySelectorAll('.hidden-service');
            
            // 2. Show them with animation
            hiddenServices.forEach(function(service) {
                service.classList.remove('d-none'); 
                service.classList.add('fade-in-up'); 
            });

            // 3. Hide the button itself
            this.style.display = 'none';
        });
    }
});

// ==================== Gallery Section =======================
// Load More Gallery
document.addEventListener("DOMContentLoaded", function () {
    const loadMoreGalleryBtn = document.getElementById('loadMoreGalleryBtn');
    
    if(loadMoreGalleryBtn) {
        loadMoreGalleryBtn.addEventListener('click', function() {
            const hiddenGalleryItems = document.querySelectorAll('.hidden-gallery');
            hiddenGalleryItems.forEach(function(item) {
                item.classList.remove('d-none');
                item.classList.add('fade-in-up');
            });
            this.style.display = 'none';
        });
    }
});

// Update Lightbox Image
function updateLightbox(imgElement) {
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imgElement.src;
}