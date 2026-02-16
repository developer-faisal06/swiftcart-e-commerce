const loadAllProduct = async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const products = await res.json();
  const limitedProducts=products.slice(0,3);
  LetestProducts(limitedProducts);
};

loadAllProduct();

const LetestProducts = (products) => {
  const leatestProducts = document.getElementById("leatestProducts");

//   {
//     "id": 19,
//     "title": "Opna Women's Short Sleeve Moisture",
//     "price": 7.95,
//     "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
//     "rating": {
//         "rate": 4.5,
//         "count": 146
//     }
// }

  products.forEach((x) => {
    const div = document.createElement("div");
div.classList.add('card', 'bg-base-100', 'border', 'border-gray-100', 'shadow-sm', 'hover:shadow-md', 'transition');
    div.innerHTML = `
<figure class="">
            <div class="bg-slate-100 rounded-xl p-8 w-full flex justify-center h-64">
              <img src="${x.image}" alt="Backpack" class="object-contain h-full" />
            </div>
          </figure>
          <div class="card-body px-6 py-4">
            <div class="flex justify-between items-center mb-2">
              <span class="badge badge-ghost text-indigo-600 bg-indigo-50 border-none px-3 py-3">${x.category}</span>
              <div class="flex items-center gap-1">
                <i class="fa-solid fa-star text-yellow-400 text-sm"></i>
                <span class="text-sm font-medium text-slate-600">${x.rating.rate} (${x.rating.count})</span>
              </div>
            </div>
            <h3 class="card-title text-slate-800 text-lg line-clamp-1">${x.title}</h3>
            <p class="text-2xl font-bold text-slate-900 mb-4"><span>৳<span>${x.price}/= </p>
            <div class="card-actions grid grid-cols-2 gap-3">
              <button class="btn btn-outline border-slate-200 hover:bg-slate-50 hover:text-slate-800"><i
                  class="fa-regular fa-eye"></i> Details</button>
              <button class="btn btn-primary bg-indigo-600 border-none text-white"><i
                  class="fa-solid fa-cart-shopping"></i> Add</button>
            </div>
          </div>
`;

    // console.log(x);
    leatestProducts.append(div);
  });
};
