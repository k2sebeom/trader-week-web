interface UserDTO {
  id: number;
  gold: number;
  nickname: string;
}

interface CompanyDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface RoomDTO {
  id: number;
  started: boolean;
  theme: string;
  users: UserDTO[];
  companies: CompanyDTO[];
}

export type { UserDTO, CompanyDTO, RoomDTO };
