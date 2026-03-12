import { type Animal, createAnimalHooks } from "./animal";

export type Cat = Animal;

export const { getAnimal: getCat, useAnimal: useCat } =
  createAnimalHooks<Cat>("/cat?json=true");
