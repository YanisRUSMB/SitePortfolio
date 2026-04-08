const translations = {
    fr: {
        // Nav
        "nav.home": "Accueil",
        "nav.projects": "Projets",
        "nav.about": "À propos",
        "nav.contact": "Contact",

        // Home
        "home.eyebrow": "Gameplay & Systems",
        "home.title": "Créer des expériences jouables fiables et lisibles.",
        "home.lead": "Développeur de jeu vidéo, j’utilise Unreal Engine pour pouvoir mettre mes idées de jeux en vie. J'aime les grands projets et en apprendre plus dans ce monde vaste qu'est le GameDev.",
        "home.btn.projects": "Voir mes projets",
        "home.btn.about": "En savoir plus sur moi",
        "home.loc.label": "Localisation",
        "home.loc.value": "Chicoutimi (QC)",
        "home.disp.label": "Disponibilité",
        "home.disp.value": "Stage partout au Québec",
        "home.focus.label": "Focus",
        "home.focus.value": "Gameplay · IA · Réseaux",
        "home.profile.title": "Profil",
        "home.profile.text": "Étudiant motivé, encore junior, je veux apprendre davantage et m'investir dans des projets sérieux ou indépendants. Je recherche un stage dans le cadre de ma maîtrise à l'UQAC.",
        "home.recent.title": "Projets Récents",
        "home.recent.desc": "Un aperçu de mon travail. Découvrez la liste complète dans la section Projets.",

        // Projects Page
        "projects.title": "Mes Projets",
        "projects.desc": "Découvrez l'ensemble de mes projets, allant des jeux complets aux outils de développement.",
        "projects.filter.all": "Tous",
        "projects.filter.games": "Jeux",
        "projects.filter.tools": "Outils",
        "projects.filter.tests": "Tests techniques",

        // About Page
        "about.title": "À propos de moi",
        "about.lead": "Passionné par la création de jeux et le développement de systèmes interactifs.",
        "about.btn.cv.fr": "Télécharger CV (FR)",
        "about.btn.cv.en": "Télécharger CV (EN)",
        "about.skills.title": "Compétences Techniques",
        "about.exp.title": "Expérience & Formation",

        // Contact Page
        "contact.title": "Contact",
        "contact.desc": "N'hésitez pas à me contacter pour toute opportunité de stage ou de collaboration.",
        "contact.btn.email": "M'envoyer un email",
        "contact.btn.linkedin": "Voir mon LinkedIn",

        // Footer
        "footer.text": "Fait avec passion.",
        "footer.updated": "Dernière mise à jour :",

        // Project Cards
        "card.btn.view": "Voir le projet",
        "card.category.game": "Jeu",
        "card.category.tool": "Outil",
        "card.category.test": "Test",

        // Common Project Info
        "project.role": "Rôle :",
        "project.team": "Équipe :",
        "project.context": "Contexte :",
        "project.features": "Mes contributions :",
        "project.btn.github": "Code Source (GitHub)",
        "project.btn.itch": "Jouer (Itch.io)"
    },
    en: {
        // Nav
        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.about": "About",
        "nav.contact": "Contact",

        // Home
        "home.eyebrow": "Gameplay & Systems",
        "home.title": "Crafting reliable and readable playable experiences.",
        "home.lead": "Video Game Developer, I use Unreal Engine to bring my game ideas to life. I love large-scale projects and learning more about the vast world of GameDev.",
        "home.btn.projects": "View my projects",
        "home.btn.about": "Learn more about me",
        "home.loc.label": "Location",
        "home.loc.value": "Chicoutimi (QC)",
        "home.disp.label": "Availability",
        "home.disp.value": "Internship anywhere in Quebec",
        "home.focus.label": "Focus",
        "home.focus.value": "Gameplay · AI · Networks",
        "home.profile.title": "Profile",
        "home.profile.text": "Highly motivated student, still a junior, I want to learn more and invest myself in serious or independent projects. I am looking for an internship as part of my Master's degree at UQAC.",
        "home.recent.title": "Recent Projects",
        "home.recent.desc": "A glimpse of my work. Discover the full list in the Projects section.",

        // Projects Page
        "projects.title": "My Projects",
        "projects.desc": "Discover all my projects, ranging from full games to development tools.",
        "projects.filter.all": "All",
        "projects.filter.games": "Games",
        "projects.filter.tools": "Tools",
        "projects.filter.tests": "Technical Tests",

        // About Page
        "about.title": "About Me",
        "about.lead": "Passionate about creating games and developing interactive systems.",
        "about.btn.cv.fr": "Download CV (FR)",
        "about.btn.cv.en": "Download CV (EN)",
        "about.skills.title": "Technical Skills",
        "about.exp.title": "Experience & Education",

        // Contact Page
        "contact.title": "Contact",
        "contact.desc": "Feel free to reach out for any internship or collaboration opportunities.",
        "contact.btn.email": "Send me an email",
        "contact.btn.linkedin": "View my LinkedIn",

        // Footer
        "footer.text": "Made with passion.",
        "footer.updated": "Last updated:",

        // Project Cards
        "card.btn.view": "View project",
        "card.category.game": "Game",
        "card.category.tool": "Tool",
        "card.category.test": "Test",

        // Common Project Info
        "project.role": "Role:",
        "project.team": "Team:",
        "project.context": "Context:",
        "project.features": "My contributions:",
        "project.btn.github": "Source Code (GitHub)",
        "project.btn.itch": "Play (Itch.io)"
    }
};

document.addEventListener("languageChanged", (e) => {
    const lang = e.detail.lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
});
