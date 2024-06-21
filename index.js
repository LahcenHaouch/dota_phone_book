import readline from "node:readline";

import { fetchHeroes, fetchAbilities } from "./fetchers.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What's the name of the hero you're looking for?\n",
  async (name) => {
    try {
      const [heroes, abilities] = await Promise.all([
        fetchHeroes(),
        fetchAbilities(),
      ]);

      const hero = heroes.find(
        (hero) => hero.localized_name.toLowerCase() === name.toLowerCase()
      );

      if (!hero) {
        console.log(`${name} not found`);
        return;
      }

      const heroAbilities = abilities[hero.name];
      hero.abilities = heroAbilities.abilities;
      console.log(hero);
    } catch (error) {
      console.log(error);
    } finally {
      rl.close();
    }
  }
);
