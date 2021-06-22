import React from 'react'
import Layout from "../components/Layout";
import StateContextProvider from "../ApiContext/StateContext";
import EditProfileContainer from '../components/EditProfile/EditProfileContainer';

export const profileEditor = () => {
  return (
    <StateContextProvider>
      <Layout title="profile-editor">
        <EditProfileContainer /> 
      </Layout>
    </StateContextProvider>
  )
}

export default profileEditor
