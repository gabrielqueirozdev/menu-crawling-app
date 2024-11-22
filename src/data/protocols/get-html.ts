export interface GetHTML {
  execute: (url: string) => Promise<string>
}
