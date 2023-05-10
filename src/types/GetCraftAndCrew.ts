import { Axios } from 'axios';

import { Starship } from './Starship';

export interface GetCraftAndCrew {
  (n: number, httpGet?: Axios['get']): Promise<Starship[][]>;
}
