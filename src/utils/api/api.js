export { getLogements };

// api.js

async function getLogements() {
    const response = await fetch("http://localhost:3000/kasa.json");
    const logements = await response.json();
  
    return logements;
}