const pollutionData = {
    bhubaneswar: { aqi: 50, pm25: 30, pm10: 60, co2: 420 },
    delhi: { aqi: 180, pm25: 120, pm10: 200, co2: 550 },
    mumbai: { aqi: 90, pm25: 55, pm10: 100, co2: 480 },
    kolkata: { aqi: 130, pm25: 80, pm10: 150, co2: 500 }
};

const ctx = document.getElementById('pollutionChart').getContext('2d');

let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['PM2.5', 'PM10', 'CO₂'],
        datasets: [{
            label: 'Pollution Levels',
            data: [30, 60, 420],
        }]
    }
});

function updateData() {
    const city = document.getElementById('citySelect').value;
    const data = pollutionData[city];

    document.getElementById('aqiValue').innerText = data.aqi;
    document.getElementById('pm25').innerText = data.pm25 + " µg/m³";
    document.getElementById('pm10').innerText = data.pm10 + " µg/m³";
    document.getElementById('co2').innerText = data.co2 + " ppm";

    // AQI color change
    const aqiCard = document.getElementById('aqiCard');
    aqiCard.className = "card";
    if (data.aqi <= 50) aqiCard.classList.add("good");
    else if (data.aqi <= 100) aqiCard.classList.add("moderate");
    else aqiCard.classList.add("poor");

    chart.data.datasets[0].data = [data.pm25, data.pm10, data.co2];
    chart.update();
}