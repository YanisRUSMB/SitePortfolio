const translations = {
  fr: {
    // === Navigation & Footer ===
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "footer.rights": "© <span id=\"year\"></span> Yanis Reynaud",
    "footer.updated": "Dernière mise à jour : <span id=\"updated\"></span>",
    "lang.switch": "EN",
    "lang.current": "FR",

    // === Homepage (index.html) ===
    "home.hero.title": "Développeur Gameplay · Réseau · Moteur",
    "home.hero.intro": "Je me présente, Yanis, 21 ans. Après deux années d'échange universitaire, je suis actuellement en maîtrise de jeux vidéo à l'UQAC et à la recherche d'un stage. J'ai commencé l'informatique il y a 5 ans au lycée, et depuis, je continue d'explorer ce vaste univers !",
    "home.hero.btn.projects": "Voir mes projets",
    "home.hero.btn.about": "En savoir plus sur moi",

    "home.preview.title": "Aperçu de mes travaux",
    "home.preview.desc": "Un jeu, un test de moteur, et un outil. Découvrez la liste complète dans la section Projets.",
    "home.preview.badge.game": "Jeu Vidéo",
    "home.preview.badge.engine": "Moteur Physique C++",
    "home.preview.badge.tool": "Outil Éditeur",

    "home.preview.card1.desc": "Vous incarnez un personnage prêt à partir pour l'escapade ultime. Vous vous attendez au vol le plus calme de votre vie en direction d'une île paradisiaque, mais les choses risquent de ne pas se passer comme prévu...",
    "home.preview.card2.desc": "Projet de création d'un moteur physique en C++ réalisé dans le cadre d'un cours de math-physique à l'UQAC. Ce moteur gère la physique 3D basique.",
    "home.preview.card3.desc": "Outil utilitaire pour Unreal Engine permettant de faciliter la gestion et l'organisation des projets au sein du moteur.",
    "home.preview.btn.all": "Voir tous mes projets",

    "home.contact.title": "Prêt à collaborer sur votre prochain projet de jeu ou à discuter d'une opportunité de stage ?",
    "home.contact.desc": "N'hésitez pas à me contacter directement !",

    // === Projets Page (projets.html) ===
    "projects.header.title": "Mes Projets",
    "projects.header.desc": "Découvrez l'ensemble de mes réalisations, des jeux vidéo complets aux outils techniques spécialisés.",
    "projects.filter.all": "Tous",
    "projects.filter.games": "Jeux Vidéo",
    "projects.filter.tools": "Outils & Moteurs",
    "projects.filter.tests": "Tests Techniques",

    "projects.card.date.prefix": "Sortie : ",
    "projects.card.tropic.desc": "Vous incarnez un personnage prêt à partir pour l'escapade ultime. Vous vous attendez au vol le plus calme de votre vie...",
    "projects.card.bloody.desc": "Vous incarnez le dernier survivant d'un monde post-apocalyptique dévasté par un mystérieux virus...",
    "projects.card.rumble.desc": "Vous avez été rétréci dans la chambre d'un adolescent. Un des deux joueurs a une longueur d'avance sur l'autre...",
    "projects.card.critter.desc": "Incarnez un écureuil prêt à tout pour protéger sa précieuse noisette d'une horde de monstres affamés...",
    "projects.card.stake.desc": "Tentez de survivre à des vagues de monstres pour accomplir votre quête de vengeance...",
    "projects.card.engine.desc": "Projet de création d'un moteur physique en C++ réalisé dans le cadre d'un cours de math-physique à l'UQAC.",
    "projects.card.tool.desc": "Outil utilitaire pour Unreal Engine permettant de faciliter la gestion et l'organisation des projets au sein du moteur.",
    "projects.card.api.desc": "Une API Backend pour gérer une flotte de drones.",
    "projects.card.ar.desc": "Test technique de réalité augmentée implémentant divers systèmes interactifs avec Unreal Engine.",

    // === A propos Page (a-propos.html) ===
    "about.header.title": "À propos de moi",
    "about.header.desc": "Découvrez mon parcours, mes expériences et les compétences techniques que j'ai développées.",

    "about.skills.title": "Mes Langages & Outils",
    "about.skills.desc": "Aperçu de mes maîtrises techniques par niveau de compétence.",

    "about.exp.title": "Expériences",
    "about.exp.desc": "Une sélection d’expériences, stages et projets marquants.",

    "about.exp1.title": "Maîtrise — Développement de jeux vidéo",
    "about.exp1.date": "UQAC — en cours",
    "about.exp1.desc": "Gameplay, IA, optimisation et prototypage.",

    "about.exp2.title": "Stage / alternance",
    "about.exp2.date": "[Peut-être chez vous?]",
    "about.exp2.desc": "Responsabilités : systèmes de jeu, tools, UI.",

    "about.exp3.title": "Game jam",
    "about.exp3.date": "WonderJam — 2025 - Automne",
    "about.exp3.desc": "Roguelike basé sur le jeu de carte \"La BATAILLE\".",

    "about.exp4.title": "Projet étudiant",
    "about.exp4.date": "Prototype UE — 2025 - Hiver",
    "about.exp4.desc": "Jeu dans le cadre d'un cours en association avec le NAD-UQAC.",

    "about.exp5.title": "WIP",
    "about.exp5.date": "D'autres expériences sont en cours",
    "about.exp5.desc": "Revenez plus tard !",

    // === Contact Page (contact.html) ===
    "contact.header.title": "Me contacter",
    "contact.header.desc": "Vous souhaitez me recruter ou discuter de projets ? Je suis toujours ouvert à de nouvelles opportunités.",
    "contact.box.title": "Discutons de votre projet",
    "contact.box.desc": "Je suis activement à la recherche d'un stage ou d'un premier poste dans l'industrie du jeu vidéo. N'hésitez pas à m'envoyer un message via email ou LinkedIn, je vous répondrai très rapidement.",
    "contact.box.email.label": "Email",
    "contact.box.socials.label": "Réseaux",
    "contact.box.location.label": "Localisation",
    "contact.box.location.value": "Chicoutimi, Québec, Canada (Mobile internationalement)",

    // === Project Details Shared ===
    "project.detail.back": "← Retour aux projets",
    "project.detail.btn.play": "Jouer sur Itch.io",
    "project.detail.btn.github": "Code Source (GitHub)",
    "project.detail.contrib.title": "Mes contributions",

    // === Dates / Months ===
    "date.month.janvier": "Janvier",
    "date.month.fevrier": "Février",
    "date.month.mars": "Mars",
    "date.month.avril": "Avril",
    "date.month.mai": "Mai",
    "date.month.juin": "Juin",
    "date.month.juillet": "Juillet",
    "date.month.aout": "Août",
    "date.month.septembre": "Septembre",
    "date.month.octobre": "Octobre",
    "date.month.novembre": "Novembre",
    "date.month.decembre": "Décembre",

    // === Individual Projects (Titles & Context) ===
    "project.tropic.context": "Dans ce jeu, vous incarnez un personnage prêt à partir pour l'escapade ultime. Vous vous attendez au vol le plus calme de votre vie en direction d'une île paradisiaque, mais les choses risquent de ne pas se passer comme prévu...",
    "project.tropic.c1": "Développement du système de mouvement du personnage (Character Controller).",
    "project.tropic.c2": "Intégration et programmation des mécaniques de survie.",
    "project.tropic.c3": "Gestion de l'inventaire et des interactions avec l'environnement.",

    "project.bloody.context": "Un monde post-apocalyptique dévasté par un mystérieux virus. En tant que dernier survivant, vous devez explorer, combattre et survivre.",
    "project.bloody.c1": "Développement du système de combat (corps-à-corps et distance).",
    "project.bloody.c2": "Programmation de l'IA ennemie (comportements de patrouille et d'attaque).",
    "project.bloody.c3": "Intégration des animations et des effets visuels.",

    "project.rumble.context": "Rétréci dans une chambre d'adolescent ! Un jeu asymétrique où un joueur est grandement avantagé sur l'autre.",
    "project.rumble.c1": "Mise en place de l'architecture réseau pour le multijoueur.",
    "project.rumble.c2": "Développement de mécaniques asymétriques équilibrées.",
    "project.rumble.c3": "Création du système de matchmaking basique.",

    "project.critter.context": "Incarnez un écureuil prêt à tout pour protéger sa précieuse noisette d'une horde de monstres.",
    "project.critter.c1": "Développement du système de 'Tower Defense'.",
    "project.critter.c2": "Programmation des vagues d'ennemis et du spawn dynamique.",
    "project.critter.c3": "Gestion des ressources (glands) et des améliorations.",

    "project.stake.context": "Survivre à des vagues de monstres pour accomplir une quête de vengeance.",
    "project.stake.c1": "Création du système de vagues (Wave Manager).",
    "project.stake.c2": "Intégration des différentes armes et de leurs statistiques.",
    "project.stake.c3": "Implémentation d'un système de progression temporaire (Roguelite).",

    "project.engine.context": "Un moteur physique personnalisé développé en C++ (math/physique). Gère les collisions basiques 3D et la physique.",
    "project.engine.c1": "Implémentation des lois de Newton (forces, vélocité, accélération).",
    "project.engine.c2": "Développement du système de détection de collisions (AABB, Sphères).",
    "project.engine.c3": "Résolution des collisions (impulsions).",

    "project.tool.context": "Outil utilitaire pour Unreal Engine facilitant la gestion et l'organisation des projets au sein de l'éditeur.",
    "project.tool.c1": "Développement de fenêtres personnalisées (Editor Utility Widgets).",
    "project.tool.c2": "Automatisation des tâches de renommage et d'organisation des assets.",
    "project.tool.c3": "Création de scripts d'audit de projet (recherche de références cassées).",

    "project.api.context": "Une API Backend pour gérer une flotte de drones.",
    "project.api.c1": "Développement de l'API REST avec Node.js.",
    "project.api.c2": "Connexion et gestion d'une base de données MongoDB.",
    "project.api.c3": "Implémentation de l'authentification et de l'autorisation (JWT).",

    "project.ar.context": "Test technique de réalité augmentée implémentant divers systèmes interactifs avec Unreal Engine.",
    "project.ar.c1": "Configuration du projet pour le support AR (ARKit/ARCore).",
    "project.ar.c2": "Détection des plans et placement d'objets virtuels.",
    "project.ar.c3": "Interactions tactiles (rotation, mise à l'échelle des objets 3D)."
  },

  en: {
    // === Navigation & Footer ===
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "footer.rights": "© <span id=\"year\"></span> Yanis Reynaud",
    "footer.updated": "Last updated: <span id=\"updated\"></span>",
    "lang.switch": "FR",
    "lang.current": "EN",

    // === Homepage (index.html) ===
    "home.hero.title": "Gameplay Developer · Network · Engine",
    "home.hero.intro": "I'm Yanis, 21 years old. After two years of university exchange, I'm currently pursuing a Master's degree in Video Games at UQAC and looking for an internship. I started computer science 5 years ago in high school, and since then, I continue to explore this vast universe!",
    "home.hero.btn.projects": "View my projects",
    "home.hero.btn.about": "Learn more about me",

    "home.preview.title": "Selected Works",
    "home.preview.desc": "A game, a physics engine, and a tool. Discover the full list in the Projects section.",
    "home.preview.badge.game": "Video Game",
    "home.preview.badge.engine": "C++ Physics Engine",
    "home.preview.badge.tool": "Editor Tool",

    "home.preview.card1.desc": "You play as a character ready to leave for the ultimate getaway. You expect the calmest flight of your life to a paradise island, but things might not go as planned...",
    "home.preview.card2.desc": "Custom C++ physics engine project created for a math-physics course at UQAC. This engine handles basic 3D physics.",
    "home.preview.card3.desc": "Utility tool for Unreal Engine to facilitate the management and organization of projects within the editor.",
    "home.preview.btn.all": "View all my projects",

    "home.contact.title": "Ready to collaborate on your next game project or discuss an internship opportunity?",
    "home.contact.desc": "Feel free to contact me directly!",

    // === Projets Page (projets.html) ===
    "projects.header.title": "My Projects",
    "projects.header.desc": "Discover all my creations, from complete video games to specialized technical tools.",
    "projects.filter.all": "All",
    "projects.filter.games": "Video Games",
    "projects.filter.tools": "Tools & Engines",
    "projects.filter.tests": "Technical Tests",

    "projects.card.date.prefix": "Released: ",
    "projects.card.tropic.desc": "You play as a character ready to leave for the ultimate getaway. You expect the calmest flight of your life...",
    "projects.card.bloody.desc": "You play as the last survivor of a post-apocalyptic world devastated by a mysterious virus...",
    "projects.card.rumble.desc": "You've been shrunk in a teenager's room. One of the two players has a head start over the other...",
    "projects.card.critter.desc": "Play as a squirrel ready to do anything to protect its precious acorn from a horde of hungry monsters...",
    "projects.card.stake.desc": "Try to survive waves of monsters to fulfill your quest for revenge...",
    "projects.card.engine.desc": "Custom C++ physics engine project created for a math-physics course at UQAC.",
    "projects.card.tool.desc": "Utility tool for Unreal Engine to facilitate project management and organization.",
    "projects.card.api.desc": "A Backend API to manage a fleet of drones.",
    "projects.card.ar.desc": "Augmented reality technical test implementing various interactive systems with Unreal Engine.",

    // === A propos Page (a-propos.html) ===
    "about.header.title": "About Me",
    "about.header.desc": "Discover my background, my experiences, and the technical skills I've developed.",

    "about.skills.title": "Languages & Tools",
    "about.skills.desc": "Overview of my technical proficiencies by skill level.",

    "about.exp.title": "Experience",
    "about.exp.desc": "A selection of key experiences, internships, and projects.",

    "about.exp1.title": "Master's Degree — Video Game Development",
    "about.exp1.date": "UQAC — Ongoing",
    "about.exp1.desc": "Gameplay, AI, optimization, and prototyping.",

    "about.exp2.title": "Internship / Work-Study",
    "about.exp2.date": "[Maybe at your company?]",
    "about.exp2.desc": "Responsibilities: game systems, tools, UI.",

    "about.exp3.title": "Game jam",
    "about.exp3.date": "WonderJam — 2025 - Fall",
    "about.exp3.desc": "Roguelike based on the card game \"WAR\".",

    "about.exp4.title": "Student Project",
    "about.exp4.date": "UE Prototype — 2025 - Winter",
    "about.exp4.desc": "Game developed for a course in association with NAD-UQAC.",

    "about.exp5.title": "WIP",
    "about.exp5.date": "Other experiences are in progress",
    "about.exp5.desc": "Check back later!",

    // === Contact Page (contact.html) ===
    "contact.header.title": "Contact Me",
    "contact.header.desc": "Interested in hiring me or discussing projects? I'm always open to new opportunities.",
    "contact.box.title": "Let's discuss your project",
    "contact.box.desc": "I am actively looking for an internship or a junior position in the video game industry. Don't hesitate to send me a message via email or LinkedIn, I'll reply very quickly.",
    "contact.box.email.label": "Email",
    "contact.box.socials.label": "Socials",
    "contact.box.location.label": "Location",
    "contact.box.location.value": "Chicoutimi, Quebec, Canada (Mobile internationally)",

    // === Project Details Shared ===
    "project.detail.back": "← Back to projects",
    "project.detail.btn.play": "Play on Itch.io",
    "project.detail.btn.github": "Source Code (GitHub)",
    "project.detail.contrib.title": "My contributions",

    // === Dates / Months ===
    "date.month.janvier": "January",
    "date.month.fevrier": "February",
    "date.month.mars": "March",
    "date.month.avril": "April",
    "date.month.mai": "May",
    "date.month.juin": "June",
    "date.month.juillet": "July",
    "date.month.aout": "August",
    "date.month.septembre": "September",
    "date.month.octobre": "October",
    "date.month.novembre": "November",
    "date.month.decembre": "December",

    // === Individual Projects (Titles & Context) ===
    "project.tropic.context": "In this game, you play as a character ready to leave for the ultimate getaway. You expect the calmest flight of your life to a paradise island, but things might not go as planned...",
    "project.tropic.c1": "Development of the character movement system (Character Controller).",
    "project.tropic.c2": "Integration and programming of survival mechanics.",
    "project.tropic.c3": "Inventory management and environmental interactions.",

    "project.bloody.context": "A post-apocalyptic world devastated by a mysterious virus. As the last survivor, you must explore, fight, and survive.",
    "project.bloody.c1": "Development of the combat system (melee and ranged).",
    "project.bloody.c2": "Enemy AI programming (patrol and attack behaviors).",
    "project.bloody.c3": "Integration of animations and visual effects.",

    "project.rumble.context": "Shrunk in a teenager's room! An asymmetrical game where one player has a major advantage over the other.",
    "project.rumble.c1": "Implementation of network architecture for multiplayer.",
    "project.rumble.c2": "Development of balanced asymmetrical mechanics.",
    "project.rumble.c3": "Creation of a basic matchmaking system.",

    "project.critter.context": "Play as a squirrel ready to do anything to protect its precious acorn from a horde of monsters.",
    "project.critter.c1": "Development of the 'Tower Defense' system.",
    "project.critter.c2": "Programming enemy waves and dynamic spawning.",
    "project.critter.c3": "Resource management (acorns) and upgrades.",

    "project.stake.context": "Survive waves of monsters to fulfill a quest for revenge.",
    "project.stake.c1": "Creation of the wave system (Wave Manager).",
    "project.stake.c2": "Integration of different weapons and their statistics.",
    "project.stake.c3": "Implementation of a temporary progression system (Roguelite).",

    "project.engine.context": "A custom physics engine developed in C++ (math/physics). Handles basic 3D collisions and physics.",
    "project.engine.c1": "Implementation of Newton's laws (forces, velocity, acceleration).",
    "project.engine.c2": "Development of the collision detection system (AABB, Spheres).",
    "project.engine.c3": "Collision resolution (impulses).",

    "project.tool.context": "Utility tool for Unreal Engine facilitating project management and organization within the editor.",
    "project.tool.c1": "Development of custom windows (Editor Utility Widgets).",
    "project.tool.c2": "Automation of renaming and asset organization tasks.",
    "project.tool.c3": "Creation of project audit scripts (finding broken references).",

    "project.api.context": "A Backend API to manage a fleet of drones.",
    "project.api.c1": "REST API development with Node.js.",
    "project.api.c2": "Connection and management of a MongoDB database.",
    "project.api.c3": "Implementation of authentication and authorization (JWT).",

    "project.ar.context": "Augmented reality technical test implementing various interactive systems with Unreal Engine.",
    "project.ar.c1": "Project configuration for AR support (ARKit/ARCore).",
    "project.ar.c2": "Plane detection and virtual object placement.",
    "project.ar.c3": "Touch interactions (rotation, scaling of 3D objects)."
  }
};

let currentLang = localStorage.getItem("preferredLang") || "fr";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferredLang", lang);

  // Mettre à jour tous les éléments avec un attribut data-i18n
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      // Pour les éléments contenant du HTML (ex: footer)
      if (element.innerHTML.includes('<span')) {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Mettre à jour le texte du bouton de switch (il affiche la langue opposée)
  const langSwitchBtn = document.getElementById("lang-switch-text");
  if (langSwitchBtn) {
    langSwitchBtn.textContent = lang === "fr" ? "EN" : "FR";
  }

  // Remettre la date/l'année dans le footer s'il a été écrasé (si présent)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const updatedEl = document.getElementById("updated");
  if (updatedEl) {
    // Format YYYY-MM-DD
    const d = new Date();
    updatedEl.textContent = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const newLang = currentLang === "fr" ? "en" : "fr";
      setLanguage(newLang);
    });
  }
});
