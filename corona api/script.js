
const apiURL = 'https://api.covid19api.com/summary';

async function fetchGlobalData() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        const globalStats = data.Global;
        document.getElementById('global-confirmed').textContent = globalStats.TotalConfirmed.toLocaleString();
        document.getElementById('global-deaths').textContent = globalStats.TotalDeaths.toLocaleString();
        document.getElementById('global-recovered').textContent = globalStats.TotalRecovered.toLocaleString();
    } catch (error) {
        console.error("Error fetching global data: ", error);
        alert("Failed to fetch global COVID-19 data.");
    }
}

async function fetchCountryData() {
    const country = document.getElementById('country-input').value.trim();

    if (!country) {
        alert('Please enter a country name!');
        return;
    }

    const countryDataURL = `'https://api.covid19india.org/data.json'/${country}`;

    try {
        const response = await fetch(countryDataURL);
        const data = await response.json();

        if (data.length === 0) {
            document.getElementById('country-data').innerHTML = `<p>No data found for ${country}</p>`;
            return;
        }

        const latestData = data[data.length - 1];
        const countryDataHTML = `
            <h3>COVID-19 Data for ${country}</h3>
            <p><strong>Confirmed Cases:</strong> ${latestData.Confirmed.toLocaleString()}</p>
            <p><strong>Deaths:</strong> ${latestData.Deaths.toLocaleString()}</p>
            <p><strong>Recovered:</strong> ${latestData.Recovered.toLocaleString()}</p>
            <p><strong>Date of Data:</strong> ${new Date(latestData.Date).toLocaleDateString()}</p>
        `;

        document.getElementById('country-data').innerHTML = countryDataHTML;
    } catch (error) {
        console.error("Error fetching country data: ", error);
        document.getElementById('country-data').innerHTML = `<p>Failed to fetch data for ${country}. Please try again later.</p>`;
    }
}

window.onload = fetchGlobalData;
