const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('http://127.0.0.1:8080/contact.html', {waitUntil: 'domcontentloaded'});
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'contact_footer.png' });

  await browser.close();
})();
