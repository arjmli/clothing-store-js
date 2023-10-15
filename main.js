const url = 'https://fakestoreapi.com/products'

var arr

function request(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {arr = data})

}


request(url)

console.log(arr);
