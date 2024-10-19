const plusIcon = document.querySelectorAll(".icon-plus");
const minusIcon = document.querySelectorAll(".icon-minus");
const disc = document.querySelectorAll(".disc");

minusIcon.forEach((icon) => (icon.style.display = "none"));
disc.forEach((disc) => (disc.style.display = "none"));

plusIcon.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    disc[index].style.display = "block";
    minusIcon[index].style.display = "block";
    icon.style.display = "none";
  });
});

minusIcon.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    disc[index].style.display = "none";
    plusIcon[index].style.display = "block";
    icon.style.display = "none";
  });
});
