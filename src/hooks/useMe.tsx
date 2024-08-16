import { useEffect, useState } from 'react';
import { UserDTO } from '../types/dto';
import { getMe } from '../utils/api';

function useMe() {
  const [me, setMe] = useState<UserDTO | null>(null);

  useEffect(() => {
    getMe().then((data) => setMe(data));
  }, [setMe]);

  return me;
}

export default useMe;
