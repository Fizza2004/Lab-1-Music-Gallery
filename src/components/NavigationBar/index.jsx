import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavigationBar.module.css';

export default function NavigationBar(){
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <NavLink to="./">
            All Musics
          </NavLink>
        </li>
        <li>
          <NavLink to="./favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
