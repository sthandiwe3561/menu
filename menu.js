alert("hello");
function showUser(response) {
  console.log(response);
}

let url = `https://api.spoonacular.com/recipes/complexSearch?query=meat&number=20
&apiKey=4adddfff185f48fea173f8ec00939dfd`;
axios.get(url).then(showUser);
