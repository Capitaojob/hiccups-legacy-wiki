const dragonClasses = [
   "boulder",
   "mystery",
   "sharp",
   "stoker",
   "strike",
   "tidal",
   "tracker"
]

document.addEventListener("DOMContentLoaded", () => {
   console.log("Loaded")

   var link = document.querySelector("link[rel~='icon']");
   if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
   }

   const randomClass = dragonClasses[Math.floor(Math.random() * dragonClasses.length)];
   link.href = `/images/classes/${randomClass}.png`;
});
