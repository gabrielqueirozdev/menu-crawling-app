import { ok } from "@presentation/helpers";
import { Controller, HttpResponse } from "@presentation/protocols";
import { AnotaAi } from "src/data/usecase";

export class GetMenuController implements Controller {
  async handle(request: any): Promise<HttpResponse> {
    const { urls } = request.body
    const menus = []

    for (const url of urls) {
      const response = await new AnotaAi().execute(url)
      menus.push(response);
    }
    
    return ok(menus)
  }
}