alert("hello");

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
