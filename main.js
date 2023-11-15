function menu() {
  foody.innerHTML = images;
}
let images = `<div class="container">
<div class="row">
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="mainImages/Steak with Shrimp and Lobster Sauce - Yel's Kitchen.jpg" class="card-img-top "  id="picture-1" alt="..." />
            <div class="card-body">
              <h5 class="card-title" id="card-text1">Steak with Shrimp and Lobster Sauce</h5>
              <p class="card-text">
                Tender, juicy filet mignon topped with a shrimp and lobster cream sauce!
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="mainImages/Creamy Shrimp Rose Pasta.jpg" class="card-img-top" id="picture-2" alt="..." />
            <div class="card-body">
              <h5 class="card-title" id="card-text2">Creamy shrimp rose pasta</h5>
              <p class="card-text">
           Creamy shrimp rose pasta features spaghetti noodles smothered in a tomato cream sauce infused with garlic, onion, and chili, and loaded with juicy succulent shrimp. This simple and indulgent pasta is so flavorful and decadent!

              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="image/Garlic Black Pepper Chicken (20 Minutes only!) - Tiffy Cooks.jpg" class="card-img-top" id="picture-3" alt="..." />
            <div class="card-body">
              <h5 class="card-title" id="card-text3">Black Pepper Chicken</h5>
              <p class="card-text">
                Tender, juicy, and buttery Black Pepper Chicken with the base of a rice.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="mainImages/The Oklahoma Onion Burger_ Your New Flat Top Grill Favorite!.jpg" class="card-img-top h" id="picture-4" alt="..." />
            <div class="card-body">
              <h5 class="card-title" id="card-text4">Oklahoma Onion Burger</h5>
              <p class="card-text">
                This Oklahoma Onion Burger is made with thinly sliced onions smashed into ground beef served with yellow mustard and pickles. So delicious!  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>`;

let foody = document.querySelector("#main");

let main = document.querySelector("#menu");
main.addEventListener("click", menu);

function showInput(event) {
  event.preventDefault();
  let name = document.getElementById("text").value;
  let date = document.getElementById("date").value;

  if (name === "") {
    alert("Please fill out the form");
    return false;
  } else {
    let form = document.getElementById("response");
    form.innerHTML = `Thank you ${name} we have recieved your request and your resevartion on ${date} is conformed`;
  }
}

let ms = document.querySelector("#on");
ms.addEventListener("click", showInput);
