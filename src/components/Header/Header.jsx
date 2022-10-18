import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.unactive}`)}>
          Home
        </NavLink>
        <NavLink to="/lifecycle" className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.unactive}`)}>
          Life Cycle
        </NavLink>
        <NavLink to="/hoc" className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.unactive}`)}>
          HOC
        </NavLink>
        <NavLink to="/context" className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.unactive}`)}>
          Context
        </NavLink>
        <NavLink to="/rickandmorty" className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.unactive}`)}>
          RickAndMorty
        </NavLink>
      </header>
    </>
  );
};
