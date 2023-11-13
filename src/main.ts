import { AllProducts, Product } from "./products";

function adatMegjelenites(lista: Product[]) {
  let l = document.getElementById('listington');
  for (const i of lista) {
    l!.innerHTML = `<li>Id: ${i.id}</li>
    <li>Title: ${i.title}</li>
    <li>Description: ${i.description}</li>
    <li>Price: ${i.price}</li>
    <li>Discount Percentage: ${i.discountPercentage}%</li>
    <li>Rating: ${i.rating}</li>
    <li>In Stock: ${i.stock}</li>
    <li>Brand: ${i.brand}</li>
    <li>Category: ${i.category}</li>
    <li>Thumbnail: ${i.thumbnail}</li>` 
  }
}

function mind(){
  fetch('products.json').then(eredmeny =>{
    if(!eredmeny.ok){
      throw new Error('Hiba')
    }
    return eredmeny.json();
  }).then((tartalom: AllProducts) => {
    adatMegjelenites(tartalom.products);
  });

}

document.addEventListener("DOMContentLoaded", () => {

  
  const mindButton = document.getElementById('mindBtn');
  mindButton!.addEventListener('click', mind)
})
