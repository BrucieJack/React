import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@components/Header/Header";
import styles from "./index.module.css";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
