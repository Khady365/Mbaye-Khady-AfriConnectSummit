// Attend que la structure HTML complète de la page soit chargée avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. GESTION DU MODE SOMBRE / CLAIR (PERSISTANCE LOCALSTORAGE)
     ========================================================================== */
  
  // Sélectionne le bouton de changement de thème grâce à son identifiant HTML "mode-sombre"
  const themeToggleBtn = document.getElementById('mode-sombre');
  
  // Interroge le navigateur pour récupérer le thème précédemment enregistré ('dark' ou 'light')
  const savedTheme = localStorage.getItem('theme');

  // Vérifie si un thème sombre était sauvegardé lors de la dernière session de l'utilisateur
  if (savedTheme === 'dark') {
    // Applique l'attribut data-theme="dark" sur la balise <html> pour activer le mode sombre
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Vérifie que le bouton de thème existe bien dans la page courante
  if (themeToggleBtn) {
    // Attache un écouteur d'événement pour déclencher une action au clic sur le bouton
    themeToggleBtn.addEventListener('click', () => {
      
      // Évalue si la page est actuellement en mode sombre en vérifiant l'attribut de <html>
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      
      // Si le mode sombre est actuellement actif
      if (isDark) {
        // Supprime l'attribut data-theme de la balise <html> pour repasser en mode clair
        document.documentElement.removeAttribute('data-theme');
        // Enregistre la valeur 'light' dans le stockage local du navigateur
        localStorage.setItem('theme', 'light');
      } 
      // Si le mode clair est actuellement actif
      else {
        // Ajoute l'attribut data-theme="dark" sur la balise <html> pour activer le mode sombre
        document.documentElement.setAttribute('data-theme', 'dark');
        // Enregistre la valeur 'dark' dans le stockage local du navigateur
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  /* ==========================================================================
     2. GESTION DU MENU HAMBURGER (AFFICHAGE MOBILE)
     ========================================================================== */
  
  // Sélectionne le bouton hamburger par son identifiant
  const hamburgerBtn = document.getElementById('hamburger');
  // Sélectionne le menu de navigation par son identifiant
  const navMenu = document.getElementById('navMenu');

  // Vérifie que le bouton hamburger et le menu existent bien dans la page
  if (hamburgerBtn && navMenu) {
    // Attache un écouteur d'événement au clic sur le bouton hamburger
    hamburgerBtn.addEventListener('click', () => {
      // Bascule (ajoute ou retire) la classe 'active' sur le bouton hamburger (animation en X)
      hamburgerBtn.classList.toggle('active');
      // Bascule (ajoute ou retire) la classe 'active' sur le menu (ouverture/fermeture)
      navMenu.classList.toggle('active');
    });

    // Sélectionne tous les liens du menu ainsi que le bouton d'inscription
    document.querySelectorAll('.nav-lien, .cta-btn').forEach(link => {
      // Attache un écouteur d'événement au clic sur chacun des liens
      link.addEventListener('click', () => {
        // Retire la classe 'active' du bouton hamburger pour remettre les 3 barres
        hamburgerBtn.classList.remove('active');
        // Retire la classe 'active' du menu pour le refermer automatiquement après le clic
        navMenu.classList.remove('active');
      });
    });
  }

});
 window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============ bouton Retour en haut ==============

// Sélectionne le bouton par son identifiant unique
const btnRetourHaut = document.getElementById('btn-retour-haut');

// 1. Écoute l'événement de défilement de la page
window.addEventListener('scroll', () => {
  // Si le défilement dépasse 300 pixels
  if (window.scrollY > 300) {
    // Ajoute la classe 'visible' qui déclenche le CSS d'apparition
    btnRetourHaut.classList.add('visible');
  } else {
    // Retire la classe 'visible' pour le masquer si on est près du haut
    btnRetourHaut.classList.remove('visible');
  }
});

// 2. Écoute le clic sur le bouton pour remonter en haut
btnRetourHaut.addEventListener('click', () => {
  // Fait défiler la fenêtre jusqu'à la position 0 (tout en haut) de manière fluide
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Active le défilement doux/animé
  });
});