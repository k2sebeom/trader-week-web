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
import HeaderBar from '../components/HeaderBar/HeaderBar';
import { getLanguage, setLanguage, supportedLanguages } from '../locales/languages';
import { useTranslation } from 'react-i18next';

function Home() {
  const [games, setGames] = useState<GameDTO[]>([]);
  const [me, setMe] = useState<UserDTO | null>(null);

  const [lng, setLng] = useState<string>(getLanguage());

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const loadAllGames = useCallback(
    (language: string) => {
      getAllGames(language).then((data) => setGames(data));
    },
    [setGames],
  );

  useEffect(() => {
    loadAllGames(lng);
  }, [loadAllGames, lng]);

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng]);

  useEffect(() => {
    getMe().then((data) => setMe(data));
  }, []);

  return (
    <div className="container">
      <HeaderBar>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <select
            value={lng}
            onChange={(e) => {
              setLng(e.target.value);
              setLanguage(e.target.value);
            }}
            id="lng-select"
          >
            {supportedLanguages.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      </HeaderBar>
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
                title: t('signinModal.title'),
                html: `
                <form>
              <input id="nickname" placeholder="${t('signinModal.nickname')}" class="swal2-input" />
              <input id="password" autocomplete placeholder="${t('signinModal.password')}" type="password" class="swal2-input" />
              </form>
            `,
                confirmButtonText: t('signinModal.confirm'),
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
            {t('join')}
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
            title: t('createModal.title'),
            input: 'text',
            text: t('createModal.message'),
            confirmButtonText: t('createModal.confirm'),
            confirmButtonColor: '#007f65',
            showLoaderOnConfirm: true,
            allowOutsideClick: !Swal.isLoading(),
            preConfirm: async (theme: string) => {
              const result = await createGame(theme, lng);
              if (result === null) {
                Swal.showValidationMessage(t('createModal.error'));
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
        {t('create')}
      </button>
    </div>
  );
}

export default Home;
