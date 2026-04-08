import re
import json

# We will define a list of project keys and their fr/en translations to append to lang.js
projects = {
    "tropicmadness": {
        "title": "TropicMadness",
        "desc": "Un jeu d'aventure palpitant en pleine nature avec un système de crafting poussé.",
        "desc_en": "A thrilling adventure game in the wilderness with an advanced crafting system."
    },
    "mytoolunreal": {
        "title": "My Tool Unreal",
        "desc": "Plugin Unreal Engine pour générer du contenu procédural facilement.",
        "desc_en": "Unreal Engine plugin to easily generate procedural content."
    },
    "apinodedrones": {
        "title": "API Node Drones",
        "desc": "Une API backend en Node.js pour la gestion d'une flotte de drones.",
        "desc_en": "A Node.js backend API for managing a fleet of drones."
    },
    "onelaststake": {
        "title": "One Last Stake",
        "desc": "OneLastTake est un jeu de carte inspiré du jeu de la bataille dans un rogue-lite.",
        "desc_en": "OneLastTake is a card game inspired by the game of War in a rogue-lite."
    },
    "bedroomrumble": {
        "title": "Bedroom Rumble",
        "desc": "Bedroom Rumble est un jeu de combat en 2D où vous incarnez des jouets dans une chambre d'enfant.",
        "desc_en": "Bedroom Rumble is a 2D fighting game where you play as toys in a child's bedroom."
    },
    "crittereats": {
        "title": "CritterEats",
        "desc": "CritterEats est un jeu de gestion de restaurant où vous incarnez un cuisinier pour des monstres.",
        "desc_en": "CritterEats is a restaurant management game where you play as a chef for monsters."
    },
    "bloodyescape": {
        "title": "BloodyEscape",
        "desc": "BloodyEscape est un jeu de plateforme 2D où vous devez vous échapper d'un donjon rempli de pièges.",
        "desc_en": "BloodyEscape is a 2D platformer where you must escape a dungeon filled with traps."
    },
    "moteurphysique": {
        "title": "Moteur Physique",
        "desc": "Un moteur physique 2D créé de zéro en C++ avec SDL2.",
        "desc_en": "A 2D physics engine created from scratch in C++ with SDL2."
    },
    "artest": {
        "title": "AR Test",
        "desc": "Un test technique en réalité augmentée avec Unity et AR Foundation.",
        "desc_en": "An augmented reality technical test using Unity and AR Foundation."
    }
}

# Add projects to lang.js
with open('lang.js', 'r', encoding='utf-8') as f:
    lang_js = f.read()

# We need to insert keys into fr and en sections
for proj, data in projects.items():
    if f'"proj.{proj}.title"' not in lang_js:
        fr_str = f'        "proj.{proj}.title": "{data["title"]}",\n        "proj.{proj}.desc": "{data["desc"]}",\n'
        en_str = f'        "proj.{proj}.title": "{data["title"]}",\n        "proj.{proj}.desc": "{data["desc_en"]}",\n'

        # Insert into FR
        lang_js = lang_js.replace('"card.category.test": "Test",', f'"card.category.test": "Test",\n{fr_str}', 1)
        # Insert into EN
        lang_js = lang_js.replace('"card.category.test": "Test"', f'"card.category.test": "Test",\n{en_str}')

with open('lang.js', 'w', encoding='utf-8') as f:
    f.write(lang_js)

# Now update HTML files
files = ['index.html', 'projets.html']
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace badges
    content = content.replace('<span class="project-badge">Jeu</span>', '<span class="project-badge" data-i18n="card.category.game">Jeu</span>')
    content = content.replace('<span class="project-badge">Outil</span>', '<span class="project-badge" data-i18n="card.category.tool">Outil</span>')
    content = content.replace('<span class="project-badge">Test Technique</span>', '<span class="project-badge" data-i18n="card.category.test">Test Technique</span>')

    # Replace titles and descriptions
    for proj, data in projects.items():
        title_tag = f'<h3>{data["title"]}</h3>'
        title_rep = f'<h3 data-i18n="proj.{proj}.title">{data["title"]}</h3>'
        desc_tag = f'<p>{data["desc"]}</p>'
        desc_rep = f'<p data-i18n="proj.{proj}.desc">{data["desc"]}</p>'

        content = content.replace(title_tag, title_rep)
        content = content.replace(desc_tag, desc_rep)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
