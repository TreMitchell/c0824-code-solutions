interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<void> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error(`fetch Error ${res.status}`);
    const users = (await res.json()) as User[];
    console.log(users);
  } catch (err) {
    console.error('fetch failed!', err);
  }
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchPokemon(): Promise<void> {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!res.ok) throw new Error(`fetch error ${res.status}`);
    const bulbasaur = (await res.json()) as Pokemon;
    console.log(bulbasaur);
  } catch (err) {
    console.error('fetch failed!', err);
  }
}

fetchUsers();
fetchPokemon();
