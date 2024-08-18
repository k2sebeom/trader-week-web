interface CompanyDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  events: EventDTO[];
  history: number[];
  thumbnail: string;
}

interface EventDTO {
  description: string;
  price: number;
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
