import axios from 'axios';
import config from './configs';
import { GameDTO, HoldingsDTO, ResultDTO, UserDTO } from '../types/dto';

const instance = axios.create({
  baseURL: config.api_base,
  withCredentials: true,
});

export async function getAllGames() {
  const resp = await instance.get('/api/game/');
  return resp.data;
}

export async function getMe(): Promise<UserDTO | null> {
  try {
    const resp = await instance.get('/api/user/me');
    return resp.data;
  } catch {
    return null;
  }
}

export async function signIn(nickname: string, password: string): Promise<UserDTO | null> {
  try {
    const resp = await instance.post('/api/user/signin', {
      nickname,
      password,
    });
    return resp.data;
  } catch {
    return null;
  }
}

export async function createGame(theme: string): Promise<GameDTO | null> {
  if (theme.trim().length === 0) {
    theme = 'Random Theme';
  }
  try {
    const resp = await instance.post('/api/game/', {
      theme,
    });
    return resp.data;
  } catch {
    return null;
  }
}

export async function getGameInfo(id: number): Promise<GameDTO | null> {
  try {
    const resp = await instance.get(`/api/game/${id}`);
    return resp.data;
  } catch {
    return null;
  }
}

export async function joinGame(id: number): Promise<GameDTO | null> {
  try {
    const resp = await instance.put(`/api/game/${id}/join`);
    return resp.data;
  } catch {
    return null;
  }
}

export async function leaveGame(id: number): Promise<GameDTO | null> {
  try {
    const resp = await instance.delete(`/api/game/${id}/leave`);
    return resp.data;
  } catch {
    return null;
  }
}

export async function startGame(id: number): Promise<GameDTO | null> {
  try {
    const resp = await instance.put(`/api/game/${id}/start`);
    return resp.data;
  } catch {
    return null;
  }
}

interface TradeDetail {
  company_id: number;
  amount: number;
}

export type { TradeDetail };

export async function makeTrade(id: number, trades: TradeDetail[]): Promise<HoldingsDTO | null> {
  try {
    const resp = await instance.post(`/api/game/${id}/trade`, {
      trades,
    });
    return resp.data;
  } catch {
    return null;
  }
}

export async function getGameResult(id: number): Promise<ResultDTO | null> {
  try {
    const resp = await instance.get(`/api/game/${id}/result`);
    return resp.data;
  } catch {
    return null;
  }
}

export async function throwAll(id: number): Promise<GameDTO | null> {
  try {
    const resp = await instance.put(`/api/game/${id}/throw`);
    return resp.data;
  } catch {
    return null;
  }
}
