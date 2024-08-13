import axios from 'axios';
import config from './configs';

const instance = axios.create({
  baseURL: config.api_base,
});

export async function getAllRooms() {
  const resp = await instance.get('/api/game/');
  return resp.data;
}
