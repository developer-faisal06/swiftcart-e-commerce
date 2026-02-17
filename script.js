const loadAllProduct = async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const products = await res.json();
  const limitedProducts = products.slice(0, 4);
  LetestProducts(limitedProducts);
  allProducts(products);
};

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
    div.classList.add(
      "card",
      "bg-base-100",
      "border",
      "border-gray-100",
      "shadow-sm",
      "hover:shadow-md",
      "transition",
    );
    div.innerHTML = `
<figure class="">
            <div class="bg-slate-100 rounded-xl p-8 w-full flex justify-center h-64">
              <img src="${x.image}" alt="Backpack" class="object-contain h-full" />
            </div>
          </figure>
          <div class="card-body px-6 py-4">
            <div class="flex justify-between items-center mb-2">
              <span class="badge absolute top-2 left-2  text-indigo-600 bg-indigo-100 border-none px-3 py-3">${x.category}</span>
              <div class="flex items-center gap-1">
                <i class="fa-solid fa-star text-yellow-400 text-sm"></i>
                <span class="text-sm font-medium text-slate-600">${x.rating.rate} (${x.rating.count})</span>
              </div>
            </div>
            <h3 class="card-title text-slate-800 text-lg line-clamp-1">${x.title}</h3>
            <p class="text-2xl font-bold text-slate-900 mb-4"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${x.price}/= </p>
            <div class="card-actions grid grid-cols-2 gap-3">
              <button onClick="productsDetails(${x.id})" class="btn btn-outline border-slate-200 hover:bg-slate-50 hover:text-slate-800"><i
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

const productsDetails = async (id) => {
  const productsDetailsUrl = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(productsDetailsUrl);
  const data = await res.json();
  // console.log(data);

  const detailsModal = document.getElementById("productDetails");
  detailsModal.showModal();
  const detailsData = document.getElementById("detailsData");
  detailsData.innerHTML = `
                 <div class="flex-1 flex flex-col justify-between">
                <div>
                    <h2 class="text-2xl font-bold text-gray-800 leading-tight">${data.title}</h2>
                    <div class="flex items-center gap-2 mt-2">
                        <div class="">
                        <i class="fa-solid fa-star text-yellow-400 text-sm"></i>
                           <span class="font-semibold">${data.rating.rate}</span>
                        </div>
                        <span class="text-gray-900 text-sm">(${data.rating.count} reviews)</span>
                    </div>                    
                    <div class="divider my-2"></div>
                    
                    <p class="text-gray-600 text-sm leading-relaxed max-h-40 overflow-y-auto">
                        ${data.description}
                    </p>
                    <p class="text-3xl font-extrabold text-indigo-600 mt-4">Price:<i class="fa-solid fa-bangladeshi-taka-sign"></i>${data.price}/=</p>
                </div>
                <div class="flex gap-3 mt-6">
                    <button class="btn btn-primary flex-1">Buy Now</button>
                    <button class="btn btn-outline btn-primary flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
    `;
};

loadAllProduct();
