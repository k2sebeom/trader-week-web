interface CompanyDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  events: EventDTO[];
  history: number[];
}

interface EventDTO {
  id: number;
  description: string;
  price: number;
  happen_at: string;
}

interface ParticipantDTO {
  id: number;
  nickname: string;
  gold: number;
  holdings: Record<number, number>;
}

interface TradeDTO {
  company_id: number;
  user_id: number;
  amount: number;
  day: number;
}

interface GameDTO {
  id: number;
  theme: string;
  companies: CompanyDTO[];
  participants: ParticipantDTO[];
  trades: TradeDTO[];
  started: boolean;
  started_at?: string;
}

interface UserDTO {
  id: number;
  nickname: string;
  gold: number;
}

interface HoldingsDTO {
  holdings: Record<number, number>;
  gold: number;
}

export type { UserDTO, CompanyDTO, GameDTO, HoldingsDTO };
