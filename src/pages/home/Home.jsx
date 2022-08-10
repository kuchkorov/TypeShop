import React from "react";
import Header from "../../components/Header";
import MainCarousell from "../../components/MainCarousell";
import Annocument from "../../components/annocument/AnnocumentList";
import Brands from "../../components/Brands";
import Footer from "../../components/Footer";
import PhonesList from "../../components/phones/PhonesList";
import NotebookList from "../../components/notebooks/NotebooksList";
import MonoblokList from "../../components/monobloks/MonoblokList";

export default function Home() {
  return (
    <>
      <Header />
      <MainCarousell />
      <Annocument />
      <PhonesList />
      <NotebookList />
      <MonoblokList />
      <Brands />
      <Footer />
    </>
  );
}
