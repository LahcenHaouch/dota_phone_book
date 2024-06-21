export async function fetchHeroes() {
  const response = await fetch(`${process.env.HEROES_API_URL}heroes`);

  try {
    const heroes = await response.json();
    return heroes;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAbilities() {
  const response = await fetch(process.env.ABILITIES_API_URL);

  try {
    const abilities = await response.json();
    return abilities;
  } catch (error) {
    console.log(error);
  }
}
