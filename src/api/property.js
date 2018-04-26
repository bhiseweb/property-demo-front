const API_URL = "http://localhost:3000";

export const fetchPropertiesData = async () => {
  try {
    const response = await fetch(`${API_URL}/properties`);
    return response.json();
  }
  catch(e) {
    console.log(e);
  }
}

export const createPropertyWithData = async (property) => {
  try {
    const response = await fetch(`${API_URL}/properties`, {method: 'POST', headers: { 'Content-Type': 'application/json' } ,body: JSON.stringify(property) });
    return response.json();
  }
  catch(e) {
    console.log(e);
  }
}

export const fetchStatsData = async () => {
  try {
    const response = await fetch(`${API_URL}/properties/stats`);
    return response.json();
  }
  catch (e) {
    console.log(e);
  }
}