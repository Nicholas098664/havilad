// const dave = document.getElementById('ray');

// let getApi = async () => {
//     let response = await fetch('https://api.polygon.io/vX/reference/ipos?limit=10&apiKey=8Z0le9ncwVXQqbIz2hEkAxLhGQRoQy5A');
//     let data = await response.json();
//     console.log(data);

//     // Ensure `data.items` exists and map over it
//     dave.innerHTML = data.items.map((x) => {
//         // Destructure the necessary properties
//         let { name, image, price } = x;  // Adjust the actual keys based on your API response

//         return `
//             <img src=${image} alt="Image">

//             <h3>${final issue price}</h3>
//             <h3>${total offer size}</h3>
//         `;
//     }).join(' ');
// };

// getApi();

// let myname = document.getElementById('tunde');
//  let getApi = async () => {

//  let response = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCIpBiqx8mNPHpJfq2BoA3uZZnQZZUpYes&maxResults=50');
//    let data = await response.json();
//     console.log(data);
//   myname.innerHTML = data.items.map((x) => {
//        return (
//         `
//     <a href=${`https://www.youtube.com/watch?v=${x.id.videoid}`}>
      
//     <img src=${x.snippet.thumbnails.medium.url}>
//        <h3>${x.snippet.channeltitle}</h3>
      
//        <h3>${x.snippet.description}</h3>
      
//       </a>
//     `
//       )
//   }).join(' ');
//     }
//     getApi();





const farmProducts = [
    { name: "Wheat", pricePerKg: 50 },
    { name: "Rice", pricePerKg: 60 },
    { name: "Corn", pricePerKg: 40 },
    { name: "Potatoes", pricePerKg: 30 },
    { name: "Tomatoes", pricePerKg: 25 },
];

const farmTools = [
    { name: "Tractor", price: 1000000 },
    { name: "Plough", price: 20000 },
    { name: "Harvester", price: 800000 },
    { name: "Hoe", price: 500 },
    { name: "Sprayer", price: 1500 },
];

// farm products
const productList = document.querySelector("#farm-products ul");
farmProducts.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} <span>${product.pricePerKg} per kg</span>`;
    productList.appendChild(li);
});

//  farm tools
const toolList = document.querySelector("#farm-tools ul");
farmTools.forEach((tool) => {
    const li = document.createElement("li");
    li.innerHTML = `${tool.name} <span>${tool.price}</span>`;
    toolList.appendChild(li);
});