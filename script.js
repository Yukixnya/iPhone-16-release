var originalSrc = '../motion/img/logo1.png';
var hoverSrc = '../motion/img/logo2.png';

// Add event listeners after DOM has loaded
document.addEventListener('DOMContentLoaded', function() {

    var logoImage = document.getElementById('logoid');
    
    // Check if element exists (in case script is executed before image is fully loaded)
    if (logoImage) {
        logoImage.addEventListener('mouseover', function() {
            this.src = hoverSrc;
        });

        logoImage.addEventListener('mouseout', function() {
            this.src = originalSrc;
        });
    }
});


const now = new Date();
const currentDateTime = now.toLocaleString();
console.log(currentDateTime);

console.log('created by : Yuki');
console.log('page info. : iPhone');
console.log('language used : HTML(20%) CSS(70%) Javascript(10%');

// window.alert('Window Alert');
