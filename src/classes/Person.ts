export class Person {
  constructor(protected name: string) {}

  sayHi(): void {
    // eslint-disable-next-line no-console
    console.log(`Hello from ${this.name}!`)
  }
}
