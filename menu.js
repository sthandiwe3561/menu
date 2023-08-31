alert("hello");
function showUser(response) {
  console.log(response);
  let icon = document.querySelector("#picture-1");
  icon.setAttribute(
    "src",
    `https://spoonacular.com/recipeImages/649225-312x231.jpg`
  );
  let name = response.data.results[0].title;
  let card = document.querySelector("#card-text1");
  card.innerHTML = name;
  let pic = document.querySelector("#picture-2");
  pic.setAttribute(
    "src",
    `https://spoonacular.com/recipeImages/649182-312x231.jpg`
  );
  let name2 = response.data.results[4].title;
  let card2 = document.querySelector("#card-text2");
  card2.innerHTML = name2;
}

let url = `https://api.spoonacular.com/recipes/complexSearch?query=lamb&number=20
&apiKey=4adddfff185f48fea173f8ec00939dfd`;
axios.get(url).then(showUser);
