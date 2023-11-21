function better() {
  info.innerHTML = start;
}
let start = `<div class="container">
  <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem">
            <img
              src="starterImages/Roasted sweet potato rounds _ Tesco Real Food.jpg"
              class="card-img-top"
              id="picture-1"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title" id="card-text1">
                Roasted sweet potato rounds
              </h5>
              <p class="card-text">
                gorgeous roasted sweet potato rounds as a vegetarian starter
                with real wow factor.They are topped with creamy whipped feta,
                juicy figs and a sticky, sweet balsamic glaze. | Tesco <br> <div class="price">R133.00</div>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img
              src="starterImages/The Best Crispy Coconut Prawns(Shrimp) - Bakes by Chichi.jpg"
              class="card-img-top"
              id="picture-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title" id="card-text2">
                Crispy Coconut Prawns(Shrimp)
              </h5>
              <p class="card-text">
                Crisp outside and a juicy inside, these Crispy Coconut Prawns
                are perfection. The prawns are dipped in seasoned flour and then
                breaded with panko and desiccated coconut. Served with crispy
                juicy prawns with sweet chilli dip <br> <div class="price">R110.00</div>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img
              src="starterImages/Vegetable Wheat Momos.jpg"
              class="card-img-top"
              id="picture-3"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title" id="card-text3">Vegetable Wheat Momos</h5>
              <p class="card-text">
                A lip smacking steamed dumpling with whole wheat flour, simple
                filling of cabbage, onions and carrots. Serve these momos along
                with spicy momo chutney! <br> <div class="price">R93.00</div>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img
              src="starterImages/Chicken 65 Recipe (Baked Version) - Aromatic Essence.jpg"
              class="card-img-top h"
              id="picture-4"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title" id="card-text4">CHICKEN 65</h5>
              <p class="card-text">
                Chicken 65 is an Indian style fried chicken, a popular chicken
                starter recipe. Classic Indian chicken snack! <br> <div class="price">R106.00</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>`;

let info = document.querySelector("#main");

let button = document.querySelector("#starter");
button.addEventListener("click", better);
