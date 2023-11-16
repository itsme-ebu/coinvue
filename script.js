const priceRowBox = document.querySelector("#priceRowBox");
const secoundPriceRowBox = document.querySelector("#priceRowBox2");
const thirdPriceRowBox = document.querySelector("#priceRowBox3");
const fourthPriceRowBox = document.querySelector("#priceRowBox4");
const fifthPriceRowBox = document.querySelector("#priceRowBox5");
let index = 0;
(async function coinPrice() {
  let rawURL = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en"
  );
  let coinURL = await rawURL.json();
  // main hero coin price
  (() => {
    const heroPrice = document.querySelector("#heroPrice");
    for (let i = 0; i < 4; i++) {
      let div = document.createElement("div");
      div.classList.add("heroPriceBox");
      div.innerHTML = ` <img src="${coinURL[i].image}" />
      <h2>${coinURL[i].name} <span class="twentyFour">${coinURL[i].price_change_percentage_24h}%</span></h2>
      <h2>$ ${coinURL[i].current_price}</h2>`;
      heroPrice.appendChild(div);
    }
  })();

  // coin list
  for (coin of coinURL) {
    let div = document.createElement("div");
    (function () {
      div.classList.add("priceRow");
      div.innerHTML = ` <div class="priceDiv">
      <img src="${coin.image}" alt="" />
      <h2>${coin.name}</h2>
      </div>
      <div class="priceDiv">
      <h2>$ ${coin.current_price}</h2>
      </div>
      <div class="priceDiv">
      <h2 class="twentyFour">${coin.price_change_percentage_24h} %</h2> </div>
      <div class="priceDiv">
      <h2>$ ${coin.market_cap}</h2> </div>      `;
      index++;
    })();
    if (index <= 10) {
      priceRowBox.appendChild(div);
    } else if (index <= 20) {
      secoundPriceRowBox.appendChild(div);
    } else if (index <= 30) {
      thirdPriceRowBox.appendChild(div);
    } else if (index <= 40) {
      fourthPriceRowBox.appendChild(div);
    } else {
      fifthPriceRowBox.appendChild(div);
    }
  }

  const twentyFour = document.querySelectorAll(".twentyFour");
  twentyFour.forEach((e) => {
    let priceChange = e.innerHTML.slice(0, 4);
    if (priceChange.includes("-")) {
      e.style.color = "red";
      e.innerHTML = priceChange + "%";
    } else {
      e.style.color = "#0ecb81";
      e.innerHTML = priceChange + "%";
    }
  });
})();
(() => {
  const page1 = document.querySelector("#page1");
  const page2 = document.querySelector("#page2");
  const page3 = document.querySelector("#page3");
  const page4 = document.querySelector("#page4");
  const page5 = document.querySelector("#page5");
  page1.addEventListener("click", () => {
    priceRowBox.style.display = "block";
    secoundPriceRowBox.style.display = "none";
    thirdPriceRowBox.style.display = "none";
    fourthPriceRowBox.style.display = "none";
    fifthPriceRowBox.style.display = "none";
  });
  page2.addEventListener("click", () => {
    priceRowBox.style.display = "none";
    secoundPriceRowBox.style.display = "block";
    thirdPriceRowBox.style.display = "none";
    fourthPriceRowBox.style.display = "none";
    fifthPriceRowBox.style.display = "none";
  });
  page3.addEventListener("click", () => {
    priceRowBox.style.display = "none";
    secoundPriceRowBox.style.display = "none";
    thirdPriceRowBox.style.display = "block";
    fourthPriceRowBox.style.display = "none";
    fifthPriceRowBox.style.display = "none";
  });
  page4.addEventListener("click", () => {
    priceRowBox.style.display = "none";
    secoundPriceRowBox.style.display = "none";
    thirdPriceRowBox.style.display = "none";
    fourthPriceRowBox.style.display = "block";
    fifthPriceRowBox.style.display = "none";
  });
  page5.addEventListener("click", () => {
    priceRowBox.style.display = "none";
    secoundPriceRowBox.style.display = "none";
    thirdPriceRowBox.style.display = "none";
    fourthPriceRowBox.style.display = "none";
    fifthPriceRowBox.style.display = "block";
  });
})();
setInterval(() => {
  gsap.to(".mainBitcoinImg, .mainethriumImg", {
    y: 25,
    duration: 0.8,
    ease: "power4.out",
    yoyo: true,
    repeat: 1,
    yoyoEase: "none",
  });
}, 1800);

gsap.to("nav", {
  backgroundColor: "#000",
  scrollTrigger: {
    scroller: "body",
    trigger: "nav",
    scrub: true,
    start: "top 0%",
    end: "top -100%",
  },
});

document.querySelector("#navMenus").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    let targetElem = e.target.getAttribute("href");
    let elementSelect = document.querySelector(targetElem);
    elementSelect.scrollIntoView({ behavior: "smooth" });
    // console.log(targetElem);
  }
});

// Navbar Sticky
