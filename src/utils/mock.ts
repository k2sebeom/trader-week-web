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

export function getMockGolds(low: number, high: number, count = 10) {
  const randomNumbers = [];

  for (let i = 0; i < count; i++) {
    // Generate random number between a and b
    const randomNumber = Math.floor(Math.random() * (high - low + 1)) + low;
    randomNumbers.push(randomNumber);
  }

  // Sort the numbers in ascending order
  randomNumbers.sort((num1, num2) => num2 - num1);

  return randomNumbers;
}
