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
                Tender, juicy filet mignon topped with a shrimp and lobster cream sauce!<br> <div class="price">R193.00</div>
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
<br> <div class="price">R175.00 </div>
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
                Tender, juicy, and buttery Black Pepper Chicken with the base of a rice. <br> <div class="price">R210.00</div>
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
                This Oklahoma Onion Burger is made with thinly sliced onions smashed into ground beef served with yellow mustard and pickles. So delicious!  <br> <div class="price">R180.00</div>
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
