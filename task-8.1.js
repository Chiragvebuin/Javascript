function whereAmI(lat, lng) {
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
    return fetch(url)
      .then(response => {
        if (response.status === 403) {
          throw new Error('Too many requests, please try again later');
        }
        return response.json();
      })
      .then(data => {
        console.log(`You are in ${data.city}, ${data.countryname}`);
        return data;
      })
      .catch(error => console.log(error));
  }
  
  whereAmI(52.508, 13.381)
    .then(data => {
      // Use the country code from the data to call the countries API
      // Render the country
    })
    .catch(error => console.log(error));
  