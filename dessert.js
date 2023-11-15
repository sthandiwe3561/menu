function food() {
  data.innerHTML = image;
}
let image = `<div class="dessert">
<div class="row">
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="dessertImages/Best Chocolate Cake Recipe _ My Baking Addiction.jpg" class="card-img-top "  id="picture-1" alt="..." />
            <div class="card-body">
              <h5 class="card-title" id="card-text1"> Chocolate Cake</h5>
              <p class="card-text">
                The Best Chocolate Cake combines cocoa and coffee to create a chocolate dream. The rich buttercream frosting makes it perfect!
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="dessertImages/10-Minute Tiramisu For Two (Eggless) - El Mundo Eats.jpg" class="card-img-top" id="picture-2" alt="..." />
            <div class="card-body">
              <h5 class="card-title" id="card-text2">Tiramisu</h5>
              <p class="card-text">
            Luscious mascarpone cream with soft coffee soaked lady fingers and a generous dust of cocoa powder.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="dessertImages/Keto Panna Cotta- Just 5 ingredients! - The Big Man's World ®.jpg" class="card-img-top" id="picture-3" alt="..." />
            <div class="card-body">
              <h5 class="card-title" id="card-text3">Keto panna cotta</h5>
              <p class="card-text">
                This keto panna cotta is a low carb and sugar free take on the classic Italian dessert!
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="dessertImages/Boston Cream Doughnuts - Baker by Nature.jpg" class="card-img-top h" id="picture-4" alt="..." />
            <div class="card-body">
              <h5 class="card-title" id="card-text4">Boston Cream Donuts </h5>
              <p class="card-text">
                Fluffy Boston Cream Donuts are stuffed with pastry cream filling and dipped in a rich chocolate glaze!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>`;

let data = document.querySelector("#main");

let dessert = document.querySelector("#desserts");
dessert.addEventListener("click", food);
