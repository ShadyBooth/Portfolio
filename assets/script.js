document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.expand-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const expandableContent = button.nextElementSibling;
            
            // Toggle visibility of content
            if (expandableContent.style.display === 'none' || expandableContent.style.display === '') {
                expandableContent.style.display = 'block'; // Show content
                expandableContent.classList.add('show'); // Add show class to change background color
                button.textContent = 'Read Less'; // Change button text
            } else {
                expandableContent.style.display = 'none'; // Hide content
                expandableContent.classList.remove('show'); // Remove show class to revert background color
                button.textContent = 'Read More'; // Reset button text
            }
        });
    });
});

