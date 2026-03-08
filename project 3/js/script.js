let name = document.querySelector(".name");
let caption = document.querySelector(".caption");
let postBtn = document.querySelector(".post-btn");
let postsContainer = document.querySelector(".posts");
let error = document.querySelector(".error");

let arr = [];

postBtn.addEventListener("click", () => {
  if (!(name.value && caption.value)) {
    name.style.borderColor = "red";
    caption.style.borderColor = "red";

    name.placeholder = "Please enter a name.";
    caption.placeholder = "Please enter a caption.";
  } else if (!isNaN(name.value)) {
    error.innerHTML = "Please use letters only.";

    name.style.borderColor = "red";
    caption.style.borderColor = "red";

    postBtn.disabled = true;
  } else {
    arr.push({
      name: name.value,
      caption: caption.value,
    });

    postsContainer.innerHTML = "";
    display();

    name.value = "";
    caption.value = "";
  }
});

function display() {
  arr.map((item) => {
    postsContainer.innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-name">${item.name}</h3>
    <p class="card-text">${item.caption}</p>
    <button  class="btn btn-primary">Edit</button>
    <button  class="btn btn-danger">Delete</button>
  </div>
</div>`;
  });
}
