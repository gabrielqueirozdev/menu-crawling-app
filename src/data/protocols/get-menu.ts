export interface GetMenu {
  execute: (url: string) => Promise<GetMenuResponse>
}
