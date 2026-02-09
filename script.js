function sendWhatsApp(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let text = `New AC Service Request%0AName: ${name}%0APhone: ${phone}%0ADetails: ${message}`;

    window.open(`https://wa.me/601111403234?text=${text}`);
}
