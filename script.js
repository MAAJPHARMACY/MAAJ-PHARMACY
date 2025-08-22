// ✅ Final Products List
let products = [
  // --- Aapke pehle wale products ---
  { id: 1, name: "NEUROBION FORTE INJ", price: 21.77, stock: 90, hsn: "30045010", image: "neurobion-forte-injection.webp" },
  { id: 2, name: "PIPERAZINE SUSP", price: 33.95, stock: 14, hsn: "30049011", image: "PIPERAZINE SUSP.jpg" },
  { id: 3, name: "SKF ENERGY POWDER", price: 16.50, stock: 5, hsn: "21069099", image: "SKF ENERGY POWDER.jpg" },
  { id: 4, name: "STAYFREE XL 6", price: 48.00, stock: 10, hsn: "96190010", image: "STAYFREE XL 6.webp" },
  { id: 5, name: "DICLOTAL INJ", price: 5.65, stock: 50, hsn: "30041010", image: "diclotal.jpeg" },
  { id: 6, name: "TAXIM 500MG INJ", price: 27.00, stock: 40, hsn: "30042019", image: "TAXIM 500.avif" },
  { id: 7, name: "CHYAWANPRASH 500 GM", price: 235.00, stock: 30, hsn: "21069099", image: "CHYAWANPRASH.jpg" },
  { id: 8, name: "LACTODEX-1", price: 1055.00, stock: 20, hsn: "21069020", image: "LACT0183_L.jpg" },
  { id: 9, name: "Vertistar -MD 8 TAB", price: 65.67, stock: 25, hsn: "30045090", image: "vertistar-md.jpg" },
  { id: 11, name: "XONE 1GR INJ", price: 71.09, stock: 22, hsn: "30041090", image: "xon0001.webp" },
  { id: 12, name: "HAJMOLA IMLI SACHET", price: 170.00, stock: 35, hsn: "30045010", image: "losil.webp" },
  { id: 13, name: "AMLOVAS 5MG TAB", price: 42.00, stock: 60, hsn: "30049099", image: "amlovas.webp" },

  // --- General popular medicines (stock = 5) ---
  { id: 101, name: "Dolo-650", price: 30, stock: 5, image: "dolo650.jpg" },
  { id: 102, name: "Calpol 500", price: 28, stock: 5, image: "calpol.jpg" },
  { id: 103, name: "Combiflam", price: 35, stock: 5, image: "combiflam.jpg" },
  { id: 104, name: "Brufen", price: 40, stock: 5, image: "brufen.jpg" },
  { id: 105, name: "Cetzine", price: 15, stock: 5, image: "Cetzine.jpg" },
  { id: 106, name: "Allegra", price: 70, stock: 5, image: "allegra.webp" },
  { id: 107, name: "Benadryl", price: 95, stock: 5, image: "benadryl.webp" },
  { id: 108, name: "Ascoril", price: 110, stock: 5, image: "ascoril.webp" },
  { id: 109, name: "Digene", price: 20, stock: 5, image: "digene.jpg" },
  { id: 110, name: "Gelusil", price: 25, stock: 5, image: "gelusil.webp" },
  { id: 111, name: "ENO", price: 12, stock: 5, image: "eno.avif" },
  { id: 112, name: "Domstal", price: 35, stock: 5, image: "domstal.jpg" },
  { id: 113, name: "Amlovas 5", price: 42, stock: 5, image: "Amlovas 5.jpg" },
  { id: 114, name: "Stamlo", price: 38, stock: 5, image: "stamlo.avif" },
  { id: 115, name: "Losar", price: 55, stock: 5, image: "losar.avif" },
  { id: 116, name: "Repace", price: 60, stock: 5, image: "repace.jpg" },
  { id: 117, name: "Ecosprin", price: 25, stock: 5, image: "ecosprin.jpg" },
  { id: 118, name: "Augmentin 625", price: 120, stock: 5, image: "augmentin.webp" },
  { id: 119, name: "Taxim-O", price: 90, stock: 5, image: "taximo.jpg" },
  { id: 120, name: "Azithral 500", price: 131, stock: 5, image: "azithral.jpg" },
  { id: 121, name: "Suprax 400", price: 150, stock: 5, image: "suprax.jpg" },
  { id: 122, name: "Stayfree xl", price: 45, stock: 5, image: "Stayfree xl.jpg" },
  { id: 123, name: "Whisper xl", price: 50, stock: 5, image: "whisper.webp" },
  { id: 124, name: "Shelcal 500", price: 60, stock: 5, image: "shelcal.webp" },
  { id: 125, name: "Dexorange", price: 95, stock: 5, image: "dexorange.jpg" },
  { id: 126, name: "Betadine", price: 35, stock: 5, image: "betadine.webp" },
  { id: 127, name: "Band-Aid", price: 20, stock: 5, image: "band-aid.jpg" },
  { id: 128, name: "Savlon", price: 60, stock: 5, image: "savlon.webp" },
  { id: 129, name: "Dettol 250ml", price: 65, stock: 5, image: "dettol.jpg" },

  // --- Mankind Popular ---
  { id: 201, name: "Nimulid", price: 25, stock: 0, image: "nimulid.webp" },
  { id: 202, name: "Paracip 650", price: 20, stock: 5, image: "paracip650.avif" },
  { id: 203, name: "Moxikind CV 625", price: 160, stock: 5, image: "moxikindcv.webp" },
  { id: 204, name: "Azikind", price: 120, stock: 0, image: "azikind.webp" },
  { id: 205, name: "Cefakind", price: 150, stock: 5, image: "cefakind.webp" },
  { id: 206, name: "Unwanted-72", price: 110, stock: 0, image: "Unwanted-72.jpg" },
  { id: 207, name: "Meftal-Spas", price: 65, stock: 0, image: "MeftalSpas.jpg" },
  { id: 209, name: "Monticope", price: 95, stock: 5, image: "monticope.webp" },
  { id: 210, name: "Candiforce", price: 95, stock: 5, image: "candiforce.webp" },
  { id: 211, name: "KZ Cream", price: 80, stock: 0, image: "KZ Cream.jpg" },
  { id: 212, name: "Dermadew Soap", price: 60, stock: 5, image: "Dermadew Soap.jpg" },
  { id: 213, name: "Manforce Condoms", price: 25, stock: 5, image: "Manforce Condoms.webp" },
  { id: 214, name: "Prega News", price: 60, stock: 5, image: "Prega News.jpg" },

  // --- Alkem Popular ---
  { id: 301, name: "Taxim-O 200", price: 145, stock: 5, image: "Taxim-O 200.avif" },
  { id: 302, name: "Clavam 625", price: 170, stock: 5, image: "clavam.webp" },
  { id: 303, name: "Monocef-O 200", price: 150, stock: 5, image: "Monocef-O 200.webp" },
  { id: 304, name: "Montair-LC", price: 95, stock: 5, image: "Montair-LC.webp" },
  { id: 305, name: "Allegra-M", price: 100, stock: 5, image: "Allegra-M.jpg" },
  { id: 306, name: "Rantac Syrup", price: 40, stock: 5, image: "Rantac Syrup.jpg" },
  { id: 307, name: "Ocid Syrup", price: 45, stock: 5, image: "Ocid Syrup.webp" },
  { id: 308, name: "Pan 40", price: 75, stock: 5, image: "pan 40.jpg" },
  { id: 309, name: "Metrogyl 400", price: 30, stock: 0, image: "Metrogyl 400.jpg" },
  { id: 310, name: "Zole-F Cream", price: 75, stock: 5, image: "Zole-FCream.avif" },
  { id: 311, name: "Candid Cream", price: 90, stock: 5, image: "Candid Cream.avif" },
  { id: 312, name: "A to Z Tablet", price: 110, stock: 5, image: "atoz.webp" },
  { id: 313, name: "Tayo 60K", price: 65, stock: 5, image: "Tayo 60K.jpg" },

  // --- Macleods Popular ---
  { id: 401, name: "Azithral 500", price: 125, stock: 5, image: "azithral.jpg." },
  { id: 402, name: "Moxclav 625", price: 165, stock: 5, image: "Moxclav 625.avif" },
  { id: 403, name: "MacPod 200", price: 150, stock: 5, image: "MacPod 200.webp" },
  { id: 404, name: "Zefu 250", price: 160, stock: 5, image: "Zefu 250.jpg" },
  { id: 405, name: "Montemac-LC", price: 95, stock: 5, image: "Montemac-LC.webp" },
  { id: 406, name: "Montemac-FX", price: 100, stock: 5, image: "MontemacFX.jpg" },
  { id: 407, name: "Grilinctus Syrup", price: 80, stock: 0, image: "Grilinctus Syrup.jpg" },
  { id: 408, name: "Pantomac 40", price: 70, stock: 5, image: "Pantomac 40.jpg" },
  { id: 409, name: "Drotin 40", price: 65, stock: 5, image: "Drotin 40.jpg" },
  { id: 410, name: "Orofer-XT", price: 95, stock: 5, image: "Orofer-XT.webp" },
  { id: 411, name: "D3 Must 60K", price: 60, stock: 5, image: "D3 Must 60K.webp" },
  { id: 412, name: "Becosules Capsule", price: 110, stock: 5, image: "Becosules Capsule.jpg" },
  { id: 413, name: "Shelcal 500", price: 85, stock: 5, image: "shelcal500.jpg" },

  // --- Sun Pharma Popular ---
  { id: 501, name: "Pantocid 40", price: 95, stock: 5, image: "Pantocid 40.jpg" },
  { id: 502, name: "Pantocid DSR", price: 120, stock: 1, image: "pantociddsr.jpg" },
  { id: 503, name: "Glycomet 500", price: 45, stock: 0, image: "Glycomet 500.webp" },
  { id: 504, name: "Glycomet GP1", price: 75, stock: 0, image: "Glycomet GP1.jpg" },
  { id: 505, name: "Volini Gel", price: 95, stock: 5, image: "Volini Gel.jpg" },
  { id: 506, name: "Susten 200", price: 145, stock: 0, image: "susten 200.avif" },
  { id: 507, name: "Levocet", price: 70, stock: 5, image: "levocet.webp" },
  { id: 508, name: "Aztor 10", price: 110, stock: 0, image: "aztor10.webp" },
  { id: 509, name: "Storvas 10", price: 115, stock: 0, image: "storvas10.webp" },
  { id: 510, name: "Rozat 10", price: 125, stock: 0, image: "rozat10.webp" },
  { id: 511, name: "Telsar 40", price: 95, stock: 0, image: "Telsar 40.jpg" },

  // --- Cipla Popular ---
  { id: 601, name: "Asthalin Inhaler", price: 120, stock: 5, image: "asthalin.avif" },
  { id: 602, name: "Foracort 200 Inhaler", price: 420, stock: 5, image: "foracort200.jpg" },
  { id: 603, name: "Budecort 200 Inhaler", price: 380, stock: 5, image: "budecort200.avif" },
  { id: 605, name: "Cofsils Lozenges", price: 35, stock: 5, image: "ofsils.jpg" },
  { id: 607, name: "Ciplox 500", price: 110, stock: 5, image: "ciplox500.avif" },
  { id: 608, name: "Esomac 40", price: 95, stock: 5, image: "esomac40.webp" },
  { id: 609, name: "Dytor 10", price: 60, stock: 5, image: "dytor10.webp" },
  { id: 610, name: "Amlopres 5", price: 38, stock: 5, image: "amlopres5.jpg" },

  // --- Lupin Popular ---
  { id: 701, name: "Rablet 20", price: 95, stock: 0, image: "rablet20.avif" },
  { id: 702, name: "Rablet-D", price: 130, stock: 5, image: "rablet-d.jpg" },
  { id: 703, name: "Gluconorm-G 1", price: 95, stock: 5, image: "gluconorm-g1.jpg" },
  { id: 704, name: "Telista 40", price: 110, stock: 5, image: "telista40.jpg" },
  { id: 705, name: "Lupizyme Syrup", price: 85, stock: 5, image: "lupizyme.jpg" },
  { id: 706, name: "Cefadur 500", price: 120, stock: 5, image: "cefadur500.jpg" },

  // --- Intas Popular ---
  { id: 801, name: "Zoryl 1", price: 75, stock: 5, image: "zoryl1.jpg" },
  { id: 802, name: "Zoryl M 1", price: 95, stock: 5, image: "zoryl-m1.jpg" },
  { id: 803, name: "Atocor 10", price: 95, stock: 5, image: "atocor10.jpg" },
  { id: 805, name: "Calcimax 500", price: 80, stock: 5, image: "calcimax500.jpg" },

  // --- Zydus Popular ---
  { id: 901, name: "Pantodac 40", price: 95, stock: 5, image: "pantodac40.jpg" },
  { id: 902, name: "Atorva 10", price: 105, stock: 5, image: "atorva10.jpg" },
  { id: 903, name: "Zyrova 10", price: 135, stock: 5, image: "zyrova10.jpg" },
  { id: 904, name: "Losacar 50", price: 80, stock: 5, image: "losacar50.jpg" },
  { id: 905, name: "Pantodac DSR", price: 140, stock: 5, image: "pantodac-dsr.jpg" },

];


let cart = JSON.parse(localStorage.getItem("cart") || "[]");

let isAdmin = false;
let isCustomerLoggedIn = localStorage.getItem("customerLoggedIn") === "true";

// ----------------------- Utility Functions -----------------------

function showCustomerLogin() {
  const m = document.getElementById("customerLoginModal");
  if (m) m.classList.remove("hidden");
}
function hideCustomerLogin() {
  const m = document.getElementById("customerLoginModal");
  if (m) m.classList.add("hidden");
}
function showSignup() {
  const l = document.getElementById("customerLoginModal");
  const s = document.getElementById("customerSignupModal");
  if (l) l.classList.add("hidden");
  if (s) s.classList.remove("hidden");
}
function hideSignup() {
  const s = document.getElementById("customerSignupModal");
  if (s) s.classList.add("hidden");
}
function logoutCustomer() {
  localStorage.removeItem("customerLoggedIn");
  isCustomerLoggedIn = false;
  location.reload();
}

// ----------------------- Admin Login Logic -----------------------

function adminLoginHandler(e) {
  e.preventDefault();
  const u = document.getElementById("loginUsername").value.trim();
  const p = document.getElementById("loginPassword").value.trim();
  // Simple static check, replace with server-side in production
  if (u === "Nipun31@" && p === "NIPUN07@") {
    isAdmin = true;
    const m = document.getElementById("adminLoginModal");
    if (m) m.classList.add("hidden");
    alert("✅ Admin login successful");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid admin credentials");
  }
}
if (document.getElementById("adminLoginForm")) {
  document.getElementById("adminLoginForm").addEventListener("submit", adminLoginHandler);
}

// ----------------------- Product Rendering -----------------------

function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");
  if (!productsGrid) return;
  productsGrid.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    let isOut = p.stock <= 0 ? 'opacity-60 pointer-events-none' : '';
    div.className = `product-card bg-white shadow rounded-lg p-4 text-sm ${isOut}`;
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="h-32 mx-auto object-contain mb-2" onerror="this.src='default-image.png'" />
      <div class="text-center product-info">
        <h3 class="font-bold">${p.name}</h3>
        <p>Price: ₹${p.price}</p>
        <p>Stock: ${p.stock > 0 ? p.stock : '<span class="text-red-600 font-semibold">Out of Stock</span>'}</p>
        ${p.expiry ? `<p>Expiry: ${p.expiry}</p>` : ""}
      </div>
      <div class="mt-2 flex justify-center gap-2">
        <button onclick="addToCart(${p.id})" class="bg-blue-500 text-white px-2 py-1 rounded" ${p.stock <= 0 ? 'disabled' : ''}>Add</button>
        ${isAdmin ? `<button onclick="editProduct(${p.id})" class="bg-yellow-400 text-white px-2 py-1 rounded">Edit</button>` : ""}
      </div>
    `;
    productsGrid.appendChild(div);
  });
}

// ----------------------- Cart Functions -----------------------

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  if (product.stock <= 0) {
    alert("Out of stock");
    return;
  }
  const item = cart.find(i => i.id === id);
  if (item) {
    if (item.quantity < product.stock) {
      item.quantity++;
    } else {
      alert("Maximum stock limit reached");
      return;
    }
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateNavbarCartCount();
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartSummary = document.getElementById("cartSummary");
  const offer = document.getElementById("offerSection");
  const count = document.getElementById("cartCount");
  if (!cartItems || !cartSummary || !count) return;
  cartItems.innerHTML = "";
  let total = 0;
  let items = 0;
  cart.forEach(c => {
    items += c.quantity;
    total += c.quantity * c.price;
    const div = document.createElement("div");
    div.className = "flex justify-between items-center mb-2";
    div.innerHTML = `
      <div>
        <b>${c.name}</b> - ₹${c.price} × 
        <input type="number" value="${c.quantity}" min="1" max="${c.stock}" onchange="changeQuantity(${c.id}, this.value)" class="w-12 border text-center" />
      </div>
      <button onclick="removeFromCart(${c.id})" class="text-red-500">❌</button>
    `;
    cartItems.appendChild(div);
  });
  const cashback = items >= 5 ? total * 0.05 : 0;
  const gst = total * 0.05;
  const final = total - cashback + gst;
  cartSummary.innerHTML = `
    <div>Total: ₹${total.toFixed(2)}</div>
    <div>Cashback: ₹${cashback.toFixed(2)}</div>
    <div>GST: ₹${gst.toFixed(2)}</div>
    <div><b>Final: ₹${final.toFixed(2)}</b></div>
    <button onclick="printInvoice(${final.toFixed(2)})" class="mt-2 bg-green-500 text-white px-3 py-1 rounded">🧾 Print Bill</button>
  `;
  count.textContent = items;
  if (offer) offer.textContent = cashback > 0 ? `Congrats! ₹${cashback.toFixed(2)} cashback` : "";
  updateNavbarCartCount();
}

function updateNavbarCartCount() {
  const navbarCartCount = document.getElementById("navbarCartCount");
  if (navbarCartCount) {
    const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
    navbarCartCount.textContent = totalItems;
  }
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function changeQuantity(id, qty) {
  qty = parseInt(qty);
  const item = cart.find(i => i.id === id);
  const product = products.find(p => p.id === id);
  if (item && product && qty > 0 && qty <= product.stock) {
    item.quantity = qty;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  renderCart();
}

// ----------------------- Customer Auth -----------------------

function customerLoginHandler(e) {
  e.preventDefault();
  const phone = document.getElementById("loginPhone").value.trim();
  const pass = document.getElementById("loginPassword").value.trim();
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const match = users.find(u => u.phone === phone && u.password === pass);
  if (match) {
    localStorage.setItem("customerLoggedIn", "true");
    isCustomerLoggedIn = true;
    hideCustomerLogin();
    const main = document.getElementById("mainContent");
    if (main) main.classList.remove("hidden");
    renderProducts();
    renderCart();
  } else alert("Invalid phone or password");
}

function customerSignupHandler(e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const phone = document.getElementById("signupPhone").value.trim();
  const pass = document.getElementById("signupPassword").value.trim();
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find(u => u.phone === phone)) return alert("Phone already registered");
  users.push({ name, phone, password: pass });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful");
  hideSignup();
  showCustomerLogin();
}

// ----------------------- Search Products -----------------------

function handleSearch(e) {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll("#productsGrid .product-card").forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(term) ? "" : "none";
  });
}

// ----------------------- Orders -----------------------

function handleOrder() {
  if (cart.length === 0) return alert("Cart is empty");

  const name = localStorage.getItem("customerName") || "Guest";
  const phone = localStorage.getItem("customerPhone") || "";
  const addr = localStorage.getItem("customerAddress") || "";
  const pin = localStorage.getItem("customerPincode") || "";
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const newOrderId = "ORDER" + Date.now();
  console.log("Order ID:", newOrderId); // Debug line

  const etaTime = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours later
  const etaString = etaTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const newOrder = {
    id: newOrderId,
    name,
    phone,
    address: addr,
    pincode: pin,
    items: [...cart],
    total: total.toFixed(2),
    status: "Pending",
    date: new Date().toLocaleString(),
    eta: `Today by ${etaString}`
  };

  let history = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  history.push(newOrder);
  localStorage.setItem("orderHistory", JSON.stringify(history));

  const ok = document.getElementById("orderSuccess");
  if (ok) {
    ok.innerHTML = `✅ <b>Order Placed!</b><br>Your order ID is <b>${newOrderId}</b>. Thank you!`;
    ok.classList.remove("hidden");
  }

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ----------------------- Invoice (added so button works) -----------------------
function printInvoice(finalAmount) {
  const w = window.open("", "PRINT", "height=600,width=400");
  const now = new Date().toLocaleString();
  const rows = (JSON.parse(localStorage.getItem("cart") || "[]")).map(i =>
    `<tr><td>${i.name}</td><td>${i.quantity}</td><td>₹${i.price}</td><td>₹${(i.price*i.quantity).toFixed(2)}</td></tr>`
  ).join("");
  w.document.write(`
    <html><head><title>Invoice</title></head><body>
    <h2>🧾 Invoice</h2><div>${now}</div>
    <table border="1" cellpadding="6" cellspacing="0">
      <tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>
      ${rows || "<tr><td colspan='4'>No items (cart was cleared after order).</td></tr>"}
    </table>
    <h3>Payable: ₹${Number(finalAmount).toFixed(2)}</h3>
    </body></html>
  `);
  w.document.close();
  w.focus();
  w.print();
  w.close();
}

// ----------------------- Show Order History -----------------------

function showOrderHistory() {
  const container = document.getElementById("orderHistory");
  if (!container) return;
  container.classList.remove("hidden");
  const history = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  if (history.length === 0) {
    container.innerHTML = "<p class='text-gray-600'>❌ No past orders found.</p>";
    return;
  }
  container.innerHTML = "<h2 class='text-lg font-bold mb-2'>📋 Your Order History</h2>";
  history.reverse().forEach(order => {
    const div = document.createElement("div");
    div.className = "bg-white shadow-md rounded p-3 mb-4 border border-gray-300";
    div.innerHTML = `
      <p><b>🆔 Order ID:</b> ${order.id}</p>
      <p><b>📅 Date:</b> ${order.date}</p>
      <p><b>💰 Total:</b> ₹${order.total}</p>
      <p><b>📦 Items:</b></p>
      <ul class="ml-6 list-disc text-sm">
        ${order.items.map(i => `<li>${i.name} × ${i.quantity}</li>`).join("")}
      </ul>
    `;
    container.appendChild(div);
  });
}

// ----------------------- INIT -----------------------

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("mainContent")?.classList.remove("hidden");
  renderProducts();
  renderCart();
  updateNavbarCartCount();

  if (window.location.pathname.includes("admin-dashboard.html")) {
    isAdmin = true;
    // render admin dashboard logic here...
  }

  if (!isCustomerLoggedIn) showCustomerLogin();

  document.getElementById("customerLoginForm")?.addEventListener("submit", customerLoginHandler);
  document.getElementById("customerSignupForm")?.addEventListener("submit", customerSignupHandler);
  document.getElementById("showSignup")?.addEventListener("click", showSignup);
  document.getElementById("closeSignup")?.addEventListener("click", hideSignup);
  document.getElementById("logoutCustomer")?.addEventListener("click", logoutCustomer);
  document.getElementById("productSearch")?.addEventListener("input", handleSearch);
  document.getElementById("orderNowBtn")?.addEventListener("click", handleOrder);

  // Add event listeners as required for modals, PDF/CSV uploads, etc.

});
// ======================= ADMIN DASHBOARD LOGIC =======================

function renderAdminOrdersTable() {
  const orders = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  const tbody = document.getElementById("ordersTable");
  if (!tbody) return;
  tbody.innerHTML = "";
  orders.reverse().forEach(order => {
    tbody.innerHTML += `
      <tr>
        <td class="border p-2">${order.id}</td>
        <td class="border p-2">${order.name} <br>${order.phone}</td>
        <td class="border p-2">
          <ul>
            ${order.items.map(i => `<li>${i.name} × ${i.quantity}</li>`).join("")}
          </ul>
        </td>
        <td class="border p-2">₹${order.total}</td>
        <td class="border p-2" id="status_${order.id}">${order.status || "Pending"}</td>
        <td class="border p-2">
          <button onclick="approveOrder('${order.id}')" class="bg-green-600 text-white px-2 py-1 rounded mr-1">Approve</button>
          <button onclick="rejectOrder('${order.id}')" class="bg-red-600 text-white px-2 py-1 rounded">Reject</button>
        </td>
      </tr>
    `;
  });
}

function approveOrder(orderId) {
  let orders = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  const idx = orders.findIndex(o => o.id === orderId);
  if (idx >= 0) {
    orders[idx].status = "Approved";
    localStorage.setItem("orderHistory", JSON.stringify(orders));
    if (document.getElementById(`status_${orderId}`))
      document.getElementById(`status_${orderId}`).textContent = "Approved";
  }
}

function rejectOrder(orderId) {
  let orders = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  const idx = orders.findIndex(o => o.id === orderId);
  if (idx >= 0) {
    orders[idx].status = "Rejected";
    localStorage.setItem("orderHistory", JSON.stringify(orders));
    if (document.getElementById(`status_${orderId}`))
      document.getElementById(`status_${orderId}`).textContent = "Rejected";
  }
}

function updateAdminStats() {
  if (document.getElementById("totalProducts"))
    document.getElementById("totalProducts").textContent = products.length;
  const orders = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  if (document.getElementById("totalOrders"))
    document.getElementById("totalOrders").textContent = orders.length;
  if (document.getElementById("pendingOrders"))
    document.getElementById("pendingOrders").textContent = orders.filter(o => o.status === "Pending" || !o.status).length;
}

// ======================= ADMIN BLOCK END =======================

