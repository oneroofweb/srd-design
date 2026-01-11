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