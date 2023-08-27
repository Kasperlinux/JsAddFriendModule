var Fstatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var check = 0;
btn.addEventListener("click", function () {
  if (check == 0) {
    Fstatus.innerHTML = "Friends";
    Fstatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    Fstatus.innerHTML = "Stranger";
    Fstatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});
