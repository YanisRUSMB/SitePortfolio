import glob
import re

files = glob.glob('projet-*.html')
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Nav updates
    content = re.sub(r'<a href="index\.html"( class="active")?>Accueil</a>', r'<a href="index.html"\1 data-i18n="nav.home">Accueil</a>', content)
    content = re.sub(r'<a href="projets\.html"( class="active")?>Projets</a>', r'<a href="projets.html"\1 data-i18n="nav.projects">Projets</a>', content)
    content = re.sub(r'<a href="a-propos\.html"( class="active")?>À propos</a>', r'<a href="a-propos.html"\1 data-i18n="nav.about">À propos</a>', content)
    content = re.sub(r'<a href="contact\.html"( class="active")?>Contact</a>', r'<a href="contact.html"\1 data-i18n="nav.contact">Contact</a>', content)

    # Back link
    content = content.replace('<a href="projets.html" class="backLink">← Retour aux projets</a>', '<a href="projets.html" class="backLink" data-i18n="project.back">← Retour aux projets</a>')

    # Meta infos
    content = content.replace('<strong>Rôle :</strong>', '<strong data-i18n="project.role">Rôle :</strong>')
    content = content.replace('<strong>Équipe :</strong>', '<strong data-i18n="project.team">Équipe :</strong>')
    content = content.replace('<strong>Contexte :</strong>', '<strong data-i18n="project.context">Contexte :</strong>')
    content = content.replace('Mes contributions :', '<span data-i18n="project.features">Mes contributions :</span>')
    content = content.replace('<h3>Mes contributions :</h3>', '<h3 data-i18n="project.features">Mes contributions :</h3>')

    # Links
    content = content.replace('Code Source (GitHub)', '<span data-i18n="project.btn.github">Code Source (GitHub)</span>')
    content = content.replace('Jouer (Itch.io)', '<span data-i18n="project.btn.itch">Jouer (Itch.io)</span>')

    # Missing languages and theme toggle
    if 'langToggle' not in content:
        nav_end_idx = content.find('</nav>')
        if nav_end_idx != -1:
            injection = """
      <div class="langToggle" style=" display: flex; background: #2a2a35; border-radius: 0.5rem; overflow: hidden; padding: 2px;">
        <button id="globalLangFr" class="active" style="background: #3b82f6; color: #fff; border: none; padding: 0.25rem 0.5rem; font-size: 0.75rem; border-radius: 0.25rem; cursor: pointer; font-family: Inter; font-weight: 500; transition: all 0.2s;">FR</button>
        <button id="globalLangEn" style="background: transparent; color: #a1a1aa; border: none; padding: 0.25rem 0.5rem; font-size: 0.75rem; border-radius: 0.25rem; cursor: pointer; font-family: Inter; font-weight: 500; transition: all 0.2s;">EN</button>
      </div>
      <div class="themeToggle">
        <button id="themeDark" class="active">Sombre</button>
        <button id="themeLight">Clair</button>
      </div>
"""
            content = content[:nav_end_idx] + injection + content[nav_end_idx:]

    # Remove extra contact link from nav if any
    content = re.sub(r'<a href="contact\.html"[^>]*>Contact</a>\n?\s*', '', content)

    # Lang JS and theme JS
    if '<script src="lang.js"></script>' not in content:
        content = content.replace('<script src="script.js"></script>', '<script src="script.js"></script>\n<script src="theme.js"></script>\n<script src="lang.js"></script>')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
