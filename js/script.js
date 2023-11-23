document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementsByClassName('sendButton');
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');

    sendButton[0].addEventListener("click", function(event){
        if (nameInput.value.trim() === ''){
            alert("Nama tidak boleh kosong");
        } else if (!isValidEmail(emailInput.value.trim())) {
            alert("Email tidak valid");
        } else {
            alert("Pesan terkirim!"); // Menampilkan alert jika validasi berhasil
            console.log('aman');
            // Di sini Anda dapat menambahkan kode untuk mengirim data atau tindakan lanjutan setelah validasi berhasil
        }
    });

    function isValidEmail(email) {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Ganti gambar setiap 3 detik (3000 milidetik)
}


