import React, { useEffect, useState } from 'react';
import '../App.css';

import LogoImg from '../assets/images/Logo.png';
import { getAllRooms } from '../utils/api';
import { RoomDTO } from '../types/dto';
import RoomTable from '../components/RoomTable';

function Home() {
  const [rooms, setRooms] = useState<RoomDTO[]>([]);

  useEffect(() => {
    getAllRooms().then((data) => setRooms(data));
  });
  return (
    <div className="container">
      <img alt="logo" src={LogoImg} className="logo" />
      <h1>Fuck you</h1>
      <RoomTable rooms={rooms} />
    </div>
  );
}

export default Home;
