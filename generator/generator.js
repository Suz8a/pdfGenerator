const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "file:///Users/suz8a/Desktop/pdf-generator/template/template.html",
    {
      waitUntil: "networkidle2",
    }
  );
  await page.pdf({ path: "hn.pdf", format: "A4" });

  await browser.close();
})();
