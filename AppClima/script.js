document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const searchBtn = document.getElementById('searchBtn');
    const weatherInfo = document.getElementById('weatherInfo');

    const apiKey = '728c420f16b5c7decf89758f3e637a78';  // Reemplaza con tu propia API key de OpenWeatherMap.
    
    searchBtn.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    if (data.cod == 200) {
                        weatherInfo.innerHTML = `
                            <p>Ciudad: ${data.name}</p>
                            <p>Temperatura: ${data.main.temp} °C</p>
                            <p>Humedad: ${data.main.humidity}%</p>
                            <p>Condiciones: ${data.weather[0].description}</p>
                        `;
                    } else {
                        weatherInfo.innerHTML = `<p>Ciudad no encontrada.</p>`;
                    }
                })
                .catch(error => {
                    console.error('Error al obtener los datos del clima:', error);
                    weatherInfo.innerHTML = `<p>Error al obtener los datos del clima. Por favor, intenta de nuevo.</p>`;
                });
        } else {
            weatherInfo.innerHTML = `<p>Por favor, ingresa una ciudad.</p>`;
        }
    });
});
