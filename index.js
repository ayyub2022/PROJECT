// Base URL for the Quran API
const apiUrlBase = "http://api.alquran.cloud/v1/ayah/";

// Reference to the HTML element where the Quran verse will be displayed
const quote = document.getElementById("verseDisplay");

// Function to generate a random Ayah number
function getRandomAyahNumber() {
    // The Quran has 6236 verses in total
    return Math.floor(Math.random() * 6236) + 1;
}

// Function to fetch a random Ayah asynchronously and display it
async function getRandomVerse() {
    // Generate a random Ayah number
    const ayahNumber = getRandomAyahNumber();

    // Choose the edition for the translation (e.g., 'en.asad' for Asad translation in English)
    const edition = 'en.asad'; 

    // Construct the URL for fetching the Ayah
    const url = `${apiUrlBase}${ayahNumber}/${edition}`;
    try {
        // Fetch the Ayah data from the API
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        // Check if the response is successful
        if (data.code === 200 && data.status === 'OK') {
            // Display the text of the ayah in the HTML element
            quote.innerHTML = data.data.text;
        } else {
            // Display an error message if fetching the Ayah fails
            quote.innerHTML = "An error occurred fetching the Ayah.";
        }
    } catch (error) {
        // Log and display an error message if an error occurs during fetching
        console.error('Error fetching the Ayah:', error);
        quote.innerHTML = "An error occurred fetching the Ayah.";
    }
}

// Call the function to fetch and display a random verse when the page loads
getRandomVerse();
