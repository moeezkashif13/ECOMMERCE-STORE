const puppeteer = require('puppeteer');

(async () => {
//   const browser = await puppeteer.launch({
      
//     headless: false,
//     // Slow it down - the slowMo option slows down Puppeteer operations by the specified amount of milliseconds. It's another way to help see what's going on.
//     slowMo: 1000, // slow down by 250ms
//     // Capture console output - You can listen for the console event. This is also handy when debugging code in page.evaluate():
//     devtools: true,
    
// });
//   const page = await browser.newPage();
//   await page.goto('http://localhost:8080/');

  
  
  
//   await browser.close();

// Create a new incognito browser context
const context = await browser.createIncognitoBrowserContext();
// Create a new page inside context.
const page = await context.newPage();
// ... do stuff with page ...
await page.goto('https://example.com');
// Dispose context once it's no longer needed.
await context.close();



})();