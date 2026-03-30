from playwright.sync_api import sync_playwright
import time

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})

        projects = ['bedroomrumble', 'crittereats']
        for project in projects:
            print(f"Verifying {project}...")
            page.goto(f"http://localhost:8000/projet-{project}.html")

            # Wait for JS to execute
            page.wait_for_timeout(1000)

            # Scroll to the project info section
            page.evaluate("window.scrollBy(0, 400)")
            page.wait_for_timeout(500)

            # Screenshot the whole page instead of content area as it might not be visible or might be named differently
            page.screenshot(path=f"verification/screenshots/{project}_scrolled.png", full_page=True)

        browser.close()

verify()
