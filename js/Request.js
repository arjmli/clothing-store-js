const url = "https://fakestoreapi.com/products";

export default function request(func) {

    fetch(url)
      .then((response) => response.json())
      .then((data) => {func(data)});

  }
