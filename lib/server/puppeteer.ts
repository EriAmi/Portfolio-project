import puppeteer from "puppeteer";

export const takeScreenshot = async (url: string): Promise<string> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const screenshot = await page.screenshot({ encoding: "base64", type: "webp" });
  const image = `data:image/webp;base64, ${screenshot}`;

  await browser.close();

  return image;
};
