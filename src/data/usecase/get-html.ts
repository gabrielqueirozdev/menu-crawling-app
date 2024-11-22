import puppeteer from "puppeteer";

import { GetHTML } from "../protocols";

export class HTML implements GetHTML {
  async execute(url: string): Promise<string> {
    const configLaunch = {
      headless: true,
      ignoreDefaultArgs: ['--disable-extensions']
    }

    const browser = await puppeteer.launch(configLaunch);
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });

    const content = await page.content();
    return content;
  }
}
