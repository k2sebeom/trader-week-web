import axios from 'axios';
import config from './configs';
import { GameDTO, UserDTO } from '../types/dto';

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
