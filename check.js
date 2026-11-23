const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const logs = [];
  page.on('console', m => logs.push(m.type()+': '+m.text()));
  page.on('pageerror', e => logs.push('PAGEERROR: '+e.message));
  await page.goto('http://127.0.0.1:4173');
  await page.waitForTimeout(2000);
  console.log('LOGS:', JSON.stringify(logs, null, 2));
  // try drag
  const card = page.locator('.brutal-card').first();
  const box = await card.boundingBox();
  console.log('card box', box);
  await page.mouse.move(box.x+10, box.y+10);
  await page.mouse.down();
  await page.mouse.move(box.x+100, box.y+100, { steps: 10 });
  await page.mouse.up();
  await page.waitForTimeout(500);
  const box2 = await card.boundingBox();
  console.log('after drag box', box2);
  await browser.close();
})();
