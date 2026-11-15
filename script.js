const bookingForm = document.querySelector('.booking-form');

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за заявку! BELLE скоро свяжется с вами 🤍');
    bookingForm.reset();
});

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', function() {
    navigation.classList.toggle('active');
});

navigation.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        navigation.classList.remove('active');
    });
});