import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import AddCustomer from "./AddCustomer";
import DashBoard from "./DashBoard";
import AddCar from "./AddCar";
import BookingPage from "./BookingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     {/* <AddCustomer></AddCustomer> */}
     {/* <DashBoard></DashBoard> */}
     {/* <AddCar></AddCar> */}
     <BookingPage></BookingPage>
    </>
  );
}
