document.addEventListener('DOMContentLoaded', function() {
   fetch('../data/dragons.json')
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {
       const container = document.getElementById('dragonsContainer');
       container.innerHTML = ''; 
       
       data.dragons.forEach(dragon => {
         const card = document.createElement('div');
         card.classList.add("dragon-card");
         card.classList.add(dragon.class.toLowerCase());
         card.tabIndex = 0;

         const classImagePath = `../images/classes/${dragon.class.toLowerCase().replace(/\s+/g, '-')}.png`;

         card.innerHTML = `
           <img src="${classImagePath}" alt="${dragon.class} Class Icon" class="class-icon" onerror="this.style.display='none'">
           <h2 class="dragon-name">${dragon.name}</h2>
           <p class="dragon-class">${dragon.class}</p>
         `;
         
         card.addEventListener('click', () => {
           window.location.href = `dragon.html?id=${encodeURIComponent(dragon.id)}`;
         });
         
         card.addEventListener("keydown", () => {
            window.location.href = `dragon.html?id=${encodeURIComponent(dragon.id)}`;
         })
         
         container.appendChild(card);
       });
     })
     .catch(error => {
       console.error('Error loading dragon data:', error);
       document.getElementById('dragonsContainer').innerHTML = `
         <div class="error-message">
           <p>Failed to load dragon data. Please try again later.</p>
         </div>
       `;
     });
 });