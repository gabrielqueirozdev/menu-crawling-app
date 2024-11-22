export class InvalidTypeError extends Error {
  constructor() {
    super(`InvalidType`)
    this.name = 'InvalidTypeError'
  }
}
