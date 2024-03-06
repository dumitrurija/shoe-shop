// document
document.title =  `Shoe Shop`

// html structure
let product = `
    <section>
        <div class="left-side">
        <img src="imgs/shoe1.webp" alt="" class="main-img">
        <div class="images">
            <img src="imgs/shoe1.webp" alt="">
            <img src="imgs/shoe2.webp" alt="">
            <img src="imgs/shoe3.png" alt="">
            <img src="imgs/shoe4.jpeg" alt="">
        </div>
        </div>
        <div class="right-side">
        <h2>GHETE DIN PIELE NATURALA</h2>
        <div class="description">
            <p>Codul Produsului <span>ITA-H404 WALTER BAUER 15432-NC</span></p>
            <p>Marca: <span>Leila Shoes</span></p>
        </div>
        <div class="details">
            <div class="price">
                <h1>Pret: <span class="pret">199</span> MDL</h1>
                <div class="count">
                    <h2>Cantitatea:</h2>
                    <div>
                        <button class="reduceBtn">-</button>
                        <p class="counter">1</p>
                        <button class="addBtn">+</button>
                    </div>
                </div>
            </div>
            <div class="size">
                <h2>Marimi:</h2>
                <div class="sizes">
                    <div>40</div>
                    <div>41</div>
                    <div>42</div>
                    <div>43</div>
                    <div>44</div>
                    <div>45</div>
                    <div>46</div>
                </div>
            </div>
        </div>
        </div>
    </section>
  </div>
`;

let container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)

// how many products to display
let products = Number(prompt("How many products do you want?"))
for (let i = 0; i < products; i++) {
    document.querySelector(".container").innerHTML += product;
}

// image choosing
let imagesDivs = document.getElementsByClassName("images");
let mainImg = document.getElementsByClassName("main-img");
let images = ["shoe1.webp", "shoe2.webp", "shoe3.png", "shoe4.jpeg"];

for (let j = 0; j < imagesDivs.length; j++) {
    let imagesDiv = imagesDivs[j];
    for (let i = 0; i < imagesDiv.children.length; i++) {
        let img = imagesDiv.children[i];
        img.addEventListener("click", () => {
            mainImg[j].src = `imgs/${images[i]}`;
        });
    }
}

// counter
let reduceBtn = document.querySelectorAll(".reduceBtn");
let countResult = document.querySelectorAll(".counter");
let addBtn = document.querySelectorAll(".addBtn");
let priceResult = document.querySelectorAll(".pret");


// count array
let count = []
for (let i = 0; i < countResult.length; i++) {
  count.push(1)
}

for (let i = 0; i < countResult.length; i++) {
  addBtn[i].addEventListener("click", () => {
    count[i]++
    countResult[i].textContent = count[i]
    console.log(count[i]);

    priceResult[i].textContent = `${199 * count[i]}`
  })
  
  reduceBtn[i].addEventListener("click", () => {
    if (count[i] > 1) {
      count[i]--
      countResult[i].textContent = count[i]
      console.log(count[i]);

      priceResult[i].textContent = `${199 * count[i]}`
    }
  })
}

// sizes option
let availableSizes = ["40", "42", "43", "44", "45", "46"];

let sizesOnWebsite = document.querySelectorAll(".sizes div");

sizesOnWebsite.forEach((el) => {
  let sizeAvailable = false;
  for (let i = 0; i < availableSizes.length; i++) {
    if (el.textContent === availableSizes[i]) {
      sizeAvailable = true;
      break;
    }
  }
  if (!sizeAvailable) {
    el.classList.add("not-available");
    el.addEventListener("mouseover", () => {
      alert("Produsul nu este valabil");
      el.innerHTML = `X`
      el.style.color = "black"
    });
  }

  let isSelected = false;

  el.addEventListener("click", () => {
    sizesOnWebsite.forEach((size) => {
      size.classList.remove("selected");
    });
    if (sizeAvailable) {
      if (!isSelected) {
        el.classList.add("selected");
        isSelected = true;
      } else {
        el.classList.remove("selected");
        isSelected = false;
      }
    }
  });
});
