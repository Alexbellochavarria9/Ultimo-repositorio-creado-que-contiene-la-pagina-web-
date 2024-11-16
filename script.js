document.getElementById('survey-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Recoge los datos del formulario
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Enviar datos como JSON
    fetch("https://script.google.com/macros/s/AKfycbx3X6tDRJLomD8vIUN6Gl75Eqg1h4YKKneF6PWJkl20_0X4sJlbf5N831grb7O9dK4/exec", { // Reemplaza con tu URL de Apps Script
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        alert("¡Gracias por participar en la encuesta!");
        document.getElementById('survey-form').reset();
    })
    .catch(error => console.error('Error:', error));
});
