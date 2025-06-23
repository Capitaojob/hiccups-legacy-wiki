document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const dragonId = urlParams.get("id");

  if (!dragonId) {
    showError("No dragon ID specified in URL");
    return;
  }

  fetch("../data/dragons.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const dragon = data.dragons.find((d) => d.id === Number(dragonId));

      if (!dragon) {
        showError(`Dragon with ID ${dragonId} not found`);
        return;
      }

      displayDragon(dragon);
    })
    .catch((error) => {
      console.error("Error loading dragon data:", error);
      showError("Failed to load dragon data. Please try again later.");
    });

  function displayDragon(dragon) {
    const container = document.getElementById("dragonContainer");

    // Create image path based on class name
    const classImagePath = `../images/classes/${dragon.class.toLowerCase().replace(/\s+/g, "-")}.png`;

    container.innerHTML = `
       <div class="dragon-detail ${dragon.class.toLowerCase()}">
         <div class="dragon-header">
           <img src="${classImagePath}" alt="${dragon.class} Class Icon" class="dragon-class-icon" onerror="this.style.display='none'">
           <div class="dragon-title">
             <h1 class="dragon-name">${dragon.name}</h1>
             <p class="dragon-class">${dragon.class} Class</p>
           </div>
         </div>

         <div class="dragon-info-section">
           <h2>Description</h2>
           <p class="dragon-description">${dragon.description}</p>
         </div>

         <div class="dragon-info-section">
           <h2>Habitat</h2>
           <div class="dragon-habitat">
             ${dragon.habitat.map((h) => `<span class="habitat-tag">${h}</span>`).join("")}
           </div>
         </div>

         <div class="dragon-info-section">
           <h2>Preferred Foods</h2>
           <div class="dragon-foods">
             ${dragon.foods.map((f) => `<span class="food-tag">${f}</span>`).join("")}
           </div>
         </div>

         <div class="dragon-info-section">
           <h2>Tameable</h2>
           <div class="dragon-tameable">
             <span class="tameable-tag">${dragon.tameable}</span>
           </div>
         </div>

         <div class="dragon-info-section">
           <h2>Needs the dragon eye to spawn?</h2>
           <div class="dragon-tameable">
             <span class="tameable-tag">${dragon.dragonEye}</span>
           </div>
         </div>

         <a href="dragons.html" class="back-link">Back to Dragons Page</a>
       </div>
     `;
  }

  function showError(message) {
    const container = document.getElementById("dragonContainer");
    container.innerHTML = `
       <div class="error-message">
         <p>${message}</p>
         <a href="dragons.html" class="back-link">Back to Dragons Page</a>
       </div>
     `;
  }
});
