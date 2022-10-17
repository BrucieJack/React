import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.css";

export const Layout = () => {
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
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
