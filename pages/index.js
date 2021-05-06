import Head from "next/head";
import Layout from "../components/Layout";
import Authen from '../components/Authen';
import StateContextProvider from "../ApiContext/StateContext";


export default function Home() {
  return (
    <StateContextProvider>
      <Layout title="Login">
        <Authen />
      </Layout>
    </StateContextProvider>
  );
}
