import React, { useEffect, useState } from 'react';
import '../App.css';
import '../components/button.css';

import LogoImg from '../assets/images/Logo.png';
import { getAllRooms, getMe, signIn } from '../utils/api';
import { RoomDTO, UserDTO } from '../types/dto';
import RoomTable from '../components/RoomTable';
import Swal from 'sweetalert2';

function Home() {
  const [rooms, setRooms] = useState<RoomDTO[]>([]);
  const [me, setMe] = useState<UserDTO | null>(null);

  useEffect(() => {
    getAllRooms().then((data) => setRooms(data));
  }, []);

  useEffect(() => {
    getMe().then((data) => setMe(data));
  }, []);

  return (
    <div className="container">
      <img alt="logo" src={LogoImg} className="logo" />
      <h1>Traders Week</h1>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        {me === null ? (
          <button
            className="styled-button"
            onClick={async () => {
              const result = await Swal.fire({
                title: 'Sign in / up as a trader!',
                html: `
                <form>
              <input id="nickname" placeholder="nickname" class="swal2-input" />
              <input id="password" autocomplete placeholder="password" type="password" class="swal2-input" />
              </form>
            `,
                confirmButtonText: 'Start Trading!',
                confirmButtonColor: '#007f65',
                preConfirm: () => {
                  return [document.getElementById('nickname'), document.getElementById('password')];
                },
              });
              const [nickname, password] = result.value;
              const user = await signIn(nickname.value, password.value);
              if (user !== null) {
                setMe(user);
              }
            }}
          >
            Join the Market!
          </button>
        ) : (
          <h1>{me.nickname}</h1>
        )}
      </div>

      <RoomTable rooms={rooms} />
    </div>
  );
}

export default Home;
