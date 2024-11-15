document.getElementById('survey-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Recoge los datos del formulario
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Enviar datos como JSON
    fetch("https://script.google.com/u/0/home/projects/175N-rMfXSyks9Tow0qNwqWNVOykyZkzJS3ozu77-Jwy495MZ_NYcu3P-/edit", { // Reemplaza con tu URL de Apps Script
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
