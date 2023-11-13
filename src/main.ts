import { AllProducts, Product } from "./products";

function adatMegjelenites(lista: Product[]) {
  let l = document.getElementById('listington');
  for (const i of lista) {
    l!.innerHTML = `<li>${i.id}</li>
    <li>${i.title}</li>
    <li>${i.description}</li>
    <li>${i.price}</li>
    <li>${i.discountPercentage}</li>
    <li>${i.rating}</li>
    <li>${i.stock}</li>
    <li>${i.brand}</li>
    <li>${i.category}</li>
    <li>${i.thumbnail}</li>` 
  }
}

function mind(){

}

document.addEventListener("DOMContentLoaded", () => {

  
  const mindButton = document.getElementById('mindBtn');
  mindButton!.addEventListener('click', mind)
})
