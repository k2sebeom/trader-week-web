import React from 'react';
import "../App.css"

import LogoImg from '../assets/images/Logo.png'

function RoomTable() {
  return (
    <div className='table-container'>
    <table className="styled-table">
      <thead>
          <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Row 1, Cell 1</td>
              <td>Row 1, Cell 2</td>
              <td>Row 1, Cell 3</td>
          </tr>
          <tr className="active-row">
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
              <td>Row 2, Cell 3</td>
          </tr>
          <tr>
              <td>Row 3, Cell 1</td>
              <td>Row 3, Cell 2</td>
              <td>Row 3, Cell 3</td>
          </tr>
      </tbody>
    </table>
    </div>
  )
}

function Home() {
  return (
    <div className="container">
      <img alt='logo' src={LogoImg} className='logo' />
      <h1>Fuck you</h1>

      <RoomTable />
    </div>
  );
}

export default Home;
