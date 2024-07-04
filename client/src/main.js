export const fetchData = async (route, data, method = "POST") => {
    const url = `http://localhost:5000${route}`;
    
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        return await response.json();
      } else {
        throw await response.json();
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  