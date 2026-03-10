let name = document.querySelector(".name");
let caption = document.querySelector(".caption");
let postBtn = document.querySelector(".post-btn");
let postsContainer = document.querySelector(".posts");
let error = document.querySelector(".error");
let update = document.querySelector(".update-btn");



let arr = [];
let undefi;

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


update.addEventListener("click",()=>{

arr[undefi].name= name.value
arr[undefi].caption = caption.value 

  update.style.display = "none";
  postBtn.style.display = "block";
 
postsContainer.innerHTML=""
display()
name.value=""
caption.value=""
})





function display() {
  arr.map((item) => {
    postsContainer.innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-name">${item.name}</h3>
    <p class="card-text">${item.caption}</p>
    <button  class="editbutton">Edit</button>
    <button  class="deletebutton">Delete</button>
  </div>
</div>`;

    let deleteBtn = document.querySelectorAll(".deletebutton");
    let deleteconverter = Array.from(deleteBtn);

    deleteconverter.map((item, index) => {
      item.addEventListener("click", () => {
        arr.splice(index, 1);
        postsContainer.innerHTML = "";
        display();
      });
    });

    let editBtn = document.querySelectorAll(".editbutton");
    let editconverter = Array.from(editBtn);

    editconverter.map((item, index) => {
      item.addEventListener("click", () => {
        update.style.display = "block";
        postBtn.style.display = "none";
        undefi=index
        name.value = arr[index].name;
        caption.value = arr[index].caption;



      });
    });
  });
}
