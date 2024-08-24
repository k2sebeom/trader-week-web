import { UserDTO } from '../types/dto';

export const mockRanking: UserDTO[] = [
  { id: 1, nickname: 'firewarden', gold: 57212 },
  { id: 2, nickname: 'TitanSlayer', gold: 46750 },
  { id: 3, nickname: 'SkyWarrior', gold: 39800 },
  { id: 4, nickname: 'dragonflame', gold: 33500 },
  { id: 5, nickname: 'battleforge', gold: 28740 },
  { id: 6, nickname: 'MysticHunter', gold: 24500 },
  { id: 7, nickname: 'shadowblade', gold: 19800 },
  { id: 8, nickname: 'ghostrider', gold: 16750 },
  { id: 9, nickname: 'roguestrike', gold: 13900 },
  { id: 10, nickname: 'pixelquest', gold: 12000 },
];

export function sortRanking(ranking: UserDTO[]) {
  ranking.sort((r1, r2) => r2.gold - r1.gold);

  return ranking.slice(0, 10);
}
