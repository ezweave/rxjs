import { People } from './People';

export interface Starship {
  cargoCapacity: string;
  consumables: string;
  costInCredits: string;
  created: Date | string;
  crew: string;
  edited: Date | string;
  films: string[];
  hyperdriveRating: string;
  length: string;
  manufacturer: string;
  maxAtmospheringSpeed: string;
  mglt: string;
  model: string;
  name: string;
  passengers: string | People[];
  pilots: string[];
  starshipClass: string;
  url: string;
}
