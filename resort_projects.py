import re

html_file = 'projets.html'
with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '<div class="projectsGrid">'
start_idx = content.find(start_marker)
if start_idx == -1:
    print("Could not find start marker")
    exit(1)
start_idx += len(start_marker)

end_marker = '</div>\n      </div>\n    </section>'
end_idx = content.find(end_marker, start_idx)
if end_idx == -1:
    print("Could not find end marker")
    exit(1)

grid_content = content[start_idx:end_idx]

cards = grid_content.split('<a href="projet-')
if len(cards) > 1:
    prefix = cards[0]
    projects = []
    for c in cards[1:]:
        proj_id = c.split('.html', 1)[0]
        full_card = '<a href="projet-' + c
        projects.append((proj_id, full_card))

    new_order = [
        "tropicmadness",
        "artest",
        "moteurphysique",
        "mytoolunreal",
        "apinodedrones",
        "onelaststake",
        "bloodyescape",
        "crittereats",
        "bedroomrumble"
    ]

    print("Before sorting:")
    for p in projects:
        print(p[0])

    projects.sort(key=lambda x: new_order.index(x[0]) if x[0] in new_order else 999)

    print("After sorting:")
    for p in projects:
        print(p[0])

    new_grid_content = prefix + "".join([p[1] for p in projects])
    new_full_content = content[:start_idx] + new_grid_content + content[end_idx:]

    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(new_full_content)
    print("Successfully sorted projects!")
else:
    print("Could not find project cards to split")
