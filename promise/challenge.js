import fetch from 'node-fetch' ;
const API = 'https://api.escuelajs.co/api/v1';

//función que va a recibir como argumento la url (API) que queremos llamar 
//esto retornará el llamado de fecth: una promesa

function fetchData(urlApi){
    return fetch(urlApi);
};

//el llamado

// fetchData(`${API}/products`)                //fetchdata recibe la url de la api (endpoint
//    .then(response => response.json())       //se hace la conversión de la data recibida a un objeto json
//    .then(products => console.log(products)) //ahora mostramos los datos de products  
//    .then(() =>{
//     console.log("locaso");
//    })
//    .catch(error => console.log(error));     // lanzamos el catch en caso de error

// //todo se realizo con exito   

fetchData(`${API}/products`) 
    .then(response => response.json())
    .then(products =>{
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product =>{
        console.log(product.title);
        return fetchData(`${API}/products/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category =>{
        console.log(category.name  );
    })
    .catch(error=>console.error(error))
    .finally(() =>console.log("finished"));
