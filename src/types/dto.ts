interface CompanyDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface GameDTO {
  id: number;
  started: boolean;
  theme: string;
  users: UserDTO[];
  companies: CompanyDTO[];
}

interface UserDTO {
  id: number;
  gold: number;
  nickname: string;
}

export type { UserDTO, CompanyDTO, GameDTO };
