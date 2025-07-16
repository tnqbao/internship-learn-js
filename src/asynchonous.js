function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "Quoc Bao" };
        console.log("Data fetched:", data);
        callback(data);
    }, 2000);
}

console.log("Check")

fetchData(function (result) {
    console.log("Result :",  result)
})