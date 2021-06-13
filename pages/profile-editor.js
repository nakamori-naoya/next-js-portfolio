import React from 'react'
import {EditProfileContainer } from '../components/EditProfile/EditProfileContainer';
import Layout from "../components/Layout";
import StateContextProvider from "../ApiContext/StateContext";

const profileEditor = () => {
  return (
    <StateContextProvider>
      <Layout title="profile-editor">
        <EditProfileContainer/> 
      </Layout>
    </StateContextProvider>
  )
}

export default profileEditor
