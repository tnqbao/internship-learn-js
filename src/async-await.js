async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
        } else {
            throw new Error(`HTTP error: ${response.status}`);
        }
    } catch (error) {
        console.error(error);
    }
}

fetchData("https://api.daudoo.com/api/account/v1/check");