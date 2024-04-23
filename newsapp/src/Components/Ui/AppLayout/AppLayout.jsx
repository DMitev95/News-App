import React from "react";
import Header from "../../Common/Header/Header";
import Footer from "../../Home/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
