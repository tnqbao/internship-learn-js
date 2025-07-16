function fetchData(url) {
    return fetch(url);
}

fetchData("https://api.daudoo.com/api/account/v1/check")
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`HTTP error: ${response.status}`);
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });