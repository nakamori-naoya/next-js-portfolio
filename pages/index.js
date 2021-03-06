import Head from "next/head";
import Layout from "../components/Layout";
import AuthenContainer from '../components/auth/AuthenContainer';
import StateContextProvider from "../ApiContext/StateContext";
import { useEffect } from 'react';


export default function Home() {

  return (
    <StateContextProvider>
      <Layout title="Login">
        <AuthenContainer />
      </Layout>
    </StateContextProvider>
  );
}
