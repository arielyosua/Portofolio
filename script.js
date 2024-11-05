document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("namaError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

    const nama = document.getElementById("nama").value.trim();
    if (nama === "") {
        document.getElementById("namaError").textContent = "Name is required.";
        isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }

    const phone = document.getElementById("phone").value.trim();
    if (phone === "") {
        document.getElementById("phoneError").textContent = "Phone number is required.";
        isValid = false;
    }

    const message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        isValid = false;
    }

    if (isValid) {
        const whatsappNumber = "6285883541890";
        const whatsappMessage = `Nama: ${nama}%0AEmail: ${email}%0ANomor HP: ${phone}%0APesan: ${message}`;
        
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappURL, "_blank");

        document.getElementById("form").reset();
    }
});
