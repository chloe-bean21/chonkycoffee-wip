
let order = JSON.parse(localStorage.getItem("order")) || 
 {
  drink: '',
  name: ''
}



function selectDrink(drink) {
  order.drink = drink;
  localStorage.setItem("order", JSON.stringify(order));
  console.log("Saved drink:", drink);
}


function saveOrder() {
  order.honey = document.getElementById("honey").checked;
  order.sugar = document.getElementById("sugar").checked;
  order.brownsugar = document.getElementById("brownsugar").checked;
  order.sweetnesslvl = document.getElementById("sweetnesslvl").value;

  
  localStorage.setItem("order", JSON.stringify(order));
}

function confirmOrder() {
  order.name = document.getElementById("name").value;
  const savedOrder = JSON.parse(localStorage.getItem("order"));

  let sugars = "";
  if (savedOrder.honey) sugars += "honey<p>";
  if (savedOrder.sugar) sugars += "sugar<p>";
  if (savedOrder.brownsugar) sugars += "brown sugar<p>";

  let sweetnesslvl = "";



  document.getElementById("orderConfirmation").style.display = "block";
  document.getElementById("orderConfirmation").innerHTML = `
  order received!<br>
  name: ${order.name}<p>
  drink: ${savedOrder.drink}<p>
  ${sugars ? `sugar type:<p>${sugars}` : "sugar type:<p>"}
  sweetness level: ${savedOrder.sweetnesslvl}%
  `;
}


document.querySelectorAll(".drinkbutton").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".drinkbutton").forEach(b =>
      b.classList.remove("hovered")
    );
   btn.classList.add("hovered"); 
  });
});

//for the carousel

let slides = document.getElementsByClassName("carousel-item");

if (slides.length > 0) {
  let slideIndex = 0;


function showSlides() {
  let i;
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
showSlides()
}



document.querySelectorAll(".dropdown-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;

            const isOpen = content.style.display === "block";
            content.style.display = isOpen ? "none" : "block";
            
        })
    })