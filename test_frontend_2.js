const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('http://127.0.0.1:8080/projet-tropicmadness.html', {waitUntil: 'networkidle'});
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'tropic.png' });

  await page.click('#globalLangEn');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'tropic_en.png' });

  await page.goto('http://127.0.0.1:8080/index.html', {waitUntil: 'networkidle'});
  await page.click('#globalLangEn');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'index_en.png' });

  await browser.close();
})();
