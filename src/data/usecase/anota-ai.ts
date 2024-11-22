import * as cheerio from "cheerio";

import { GetMenu } from "../protocols";
import { HTML } from "./get-html";

export class AnotaAi implements GetMenu {
  async execute(url: string): Promise<GetMenuResponse> {
    const values: Menu[] = [];

    const content = await new HTML().execute(url)
    const $ = cheerio.load(content);

    const name = $(".header .content .profile .name").text();
    const response: GetMenuResponse = {
      name,
      url,
      menu: values
    }

    $(".category").each((_, categoryElement) => {
      const categoryName = $(categoryElement)
        .find(".title-container .title")
        .text()
        .trim();

      const items: MenuItem[] = [];

      $(categoryElement)
        .find(".item-card")
        .each((_, itemElement) => {
          const itemName = $(itemElement)
            .find(".text-info .title")
            .text()
            .trim();
          const itemPrice = $(itemElement)
            .find(".text-info .price-value")
            .text()
            .trim();
          const description = $(itemElement)
            .find(".text-info .description")
            .text()
            .trim();

          items.push({ name: itemName, value: itemPrice, description });
        });

      values.push({ categoryName: categoryName, items });
    });

    response.menu = values;
    return response;
  }
}
