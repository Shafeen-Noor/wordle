import { type Animal, createAnimalHooks } from "./animal"

export type Dog = Animal

export const { getAnimal: getDog, useAnimal: useDog } =
  createAnimalHooks<Dog>("/dog?json=true")
