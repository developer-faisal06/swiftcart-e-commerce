const loadAllProduct = async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const products = await res.json();
  
  allProducts(products);
};


const productsCategory=async()=>{
const url='https://fakestoreapi.com/products/categories'
const res=await fetch(url)
const categories=await res.json()
displayCategoryLavel(categories);
}

const displayCategoryLavel=(categories)=>{
const productsCategory=document.getElementById('ProductsCategores');

for(category of categories){
    const div=document.createElement('div');
    div.classList.add('teb-section', 'justify-center' );
    div.innerHTML=`<button class="btn  btn-sm rounded-4xl  border-indigo-600 text-dark hover:bg-indigo-600 hover:text-white">${category}</button>`;
    productsCategory.append(div);
        console.log(category);
        console.log(div)
}

}

const allProducts=(products)=>{
console.log(products)
}

loadAllProduct()
productsCategory()