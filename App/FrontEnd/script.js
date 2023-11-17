document.addEventListener('DOMContentLoaded', function() {

    const nikolaContainer = document.getElementById('nikola-tesla');

    function loadImages () {
        
        fetch('http://localhost:3000/nikola')

            .then(response => response.json())
            .then(nik => {
                nik.forEach(tesla => {

                    const div = document.createElement('div');

                    div.className = 'nikola';

                    div.innerHTML = `
                        <img src="${tesla.NikolaImagePath}">
                    `;

                    nikolaContainer.appendChild(div);
                });
            })
            .catch(error => console.error('Erro ao buscar lanches:', error));
    }
    loadImages();
});
