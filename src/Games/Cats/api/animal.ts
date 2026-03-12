import useAsync from "#shared/useAsync";
import { get } from "./api";

/** Shared shape for all animals returned from the cataas.com API. */
export type Animal = {
  id: string;
  tags: string[];
  created_at: Date;
  url: string;
  mimetype: string;
};

export function createAnimalHooks<T extends Animal>(path: string) {
  async function getAnimal(): Promise<T> {
    return get<T>(path);
  }

  function useAnimal(): [T | undefined, { refresh: () => void }] {
    return useAsync(getAnimal);
  }

  return { getAnimal, useAnimal };
}
