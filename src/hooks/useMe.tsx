import { useCallback, useEffect, useState } from 'react';
import { UserDTO } from '../types/dto';
import { getMe, signIn } from '../utils/api';

interface UseMeHooks {
  me: UserDTO | null;
  meSignIn: (nickname: string, password: string) => Promise<UserDTO | null>;
}

function useMe(): UseMeHooks {
  const [me, setMe] = useState<UserDTO | null>(null);

  useEffect(() => {
    getMe().then((data) => setMe(data));
  }, [setMe]);

  const meSignIn = useCallback(async (nickname: string, password: string) => {
    const data = await signIn(nickname, password);
    setMe(data);
    return data;
  }, []);

  return {
    me,
    meSignIn,
  };
}

export default useMe;
