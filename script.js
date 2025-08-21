const form = document.getElementById('weatherForm');
const input = document.getElementById('locationInput');
const temperature = document.getElementById('temperature');
const locationName = document.getElementById('locationName');
const resultCard = document.getElementById('weatherResult');

const API_KEY = '6757c89a5ef846f79af84940252108';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = input.value.trim();
  if (!city) return;

  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    const data = await res.json();

    if (data.error) {
      alert("Location not found. Please try again.");
      return;
    }

    const tempC = data.current.temp_c;
    const name = data.location.name + ', ' + data.location.country;

    temperature.textContent = `${tempC} °C`;
    locationName.textContent = name;

    resultCard.classList.remove('hidden');
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again later.");
  }
});
