import React from 'react';
import './card.css';
import CoinImg from '../../assets/images/coin.png';
import { UserDTO } from '../../types/dto';

interface ProfileCardProps {
  user: UserDTO;
}

function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2>Trader ID: </h2>
        <h2 className="nickname">{user.nickname}</h2>
      </div>

      <div className="profile-row">
        <img className="coin" src={CoinImg} alt="coin" />
        <h2>{user.gold}</h2>
      </div>

      <div className="profile-row">
        <h2>Weeks Traded:</h2>
        <h2 className="nickname">{user.games.length}</h2>
      </div>
    </div>
  );
}

export default ProfileCard;
