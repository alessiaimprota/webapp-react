//importo outlet per fare da segnaposto nel layout e header che rimane invariato nelle pagine
import { Outlet } from "react-router";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
