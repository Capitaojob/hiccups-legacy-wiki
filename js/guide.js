document.addEventListener("DOMContentLoaded", function () {
  const dragonList = document.querySelector(".dragon-list");

  fetch("../data/dragons.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data.dragons.forEach((dragon) => {
        const newDragonDiv = document.createElement("div");
        newDragonDiv.classList.add("dragon-tag");
        newDragonDiv.innerText = dragon.name;
        dragonList.appendChild(newDragonDiv);
      });
    });
});
