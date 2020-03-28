import { Person } from './Person'

export class Superhero extends Person {
  constructor(name: string, private power: string) {
    super(name)
  }

  sayHi(): void {
    // eslint-disable-next-line no-console
    console.log(
      `Ahoy! I am ${this.name}, and I have the power of ${this.power}!`,
    )
  }
}
