document.addEventListener('DOMContentLoaded', function() {
   const headerHTML = `
   <header>
       <h3 class="logo">Hiccup's Legacy</h3>
       <nav>
           <ul>
               <li><a href="../index.html">Home</a></li>
               <li><a href="dragons.html">Dragons</a></li>
               <li><a href="weapons.html">Weapons</a></li>
               <li><a href="guide.html">Guide</a></li>
           </ul>
       </nav>
   </header>
   `;
   
   const footerHTML = `
   <footer>
      <div class="footer-links">
        <a href="guide.html">Basic Mod Guide</a>
        <a href="https://curseforge.com/minecraft/mc-mods/hiccups-legacy" target="_blank">Download the Mod</a>
        <a href="https://discord.gg/mSjv4gPEuy" target="_blank">Join the Discord</a>
      </div>
      <p>&copy; 2025 Hiccup's Legacy Mod Wiki. All rights reserved.</p>
    </footer>
   `;
   
   document.body.insertAdjacentHTML('afterbegin', headerHTML);
   document.body.insertAdjacentHTML('beforeend', footerHTML);
});