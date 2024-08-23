import React, { useCallback, useEffect, useState } from 'react';
import './home.css';
import '../components/button.css';

import LogoImg from '../assets/images/Logo.png';
import { createGame, getAllGames, getMe, signIn } from '../utils/api';
import { GameDTO, UserDTO } from '../types/dto';
import RoomTable from '../components/RoomTable';
import Swal from 'sweetalert2';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [games, setGames] = useState<GameDTO[]>([]);
  const [me, setMe] = useState<UserDTO | null>(null);

  const navigate = useNavigate();

  const loadAllGames = useCallback(() => {
    getAllGames().then((data) => setGames(data));
  }, [setGames]);

  useEffect(() => {
    loadAllGames();
  }, [loadAllGames]);

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
          width: '80%',
          display: 'flex',
          justifyContent: 'center',
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
              if (result.value !== undefined) {
                const [nickname, password] = result.value;
                const user = await signIn(nickname.value, password.value);
                if (user !== null) {
                  setMe(user);
                }
              }
            }}
          >
            Join the Market!
          </button>
        ) : (
          <ProfileCard user={me} />
        )}
      </div>

      <RoomTable rooms={games} />

      <button
        style={{
          marginTop: 20,
        }}
        className="styled-button"
        onClick={async () => {
          const result = await Swal.fire({
            title: 'Enter a theme for the game!',
            input: 'text',
            text: 'It may take upto 2 minutes to setup a new market',
            confirmButtonText: 'Create a Game',
            confirmButtonColor: '#007f65',
            showLoaderOnConfirm: true,
            allowOutsideClick: !Swal.isLoading(),
            preConfirm: async (theme: string) => {
              const result = await createGame(theme);
              if (result === null) {
                Swal.showValidationMessage('Game cannot be created now. Please try few minutes later.');
              } else {
                return result;
              }
            },
          });
          if (result.isConfirmed && result.value !== undefined) {
            const game: GameDTO = result.value;
            navigate(`/${game.id}`);
          }
        }}
      >
        Create New Game
      </button>
    </div>
  );
}

export default Home;
