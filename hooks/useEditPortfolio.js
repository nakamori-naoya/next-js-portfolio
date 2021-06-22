import React from 'react'
import { useState, useCallback, useEffect } from 'react';
import { createPortfolio } from '../lib/portfolio';

const useEditPortfolio = () => {
  const [appName, setAppName] = useState ("")
  const [appUrl, setAppUrl] = useState("")
  const [description, setDescription] = useState("")
  const [githubUrl, setGithubUrl] = useState("")



  const  inputAppName  = useCallback((event) => {
    setAppName(event.target.value)
  }, [setAppName]);

  const  inputAppUrl  = useCallback((event) => {
    setAppUrl(event.target.value)
  }, [setAppUrl]);

  const  inputDescription  = useCallback((event) => {
    setDescription(event.target.value)
  }, [setDescription]);

  const  inputGithubUrl  = useCallback((event) => {
    setGithubUrl(event.target.value)
  }, [setGithubUrl]);


  const create = async({images, appName, appUrl, description, githubUrl, chipData}) =>{
    const data = await createPortfolio({images, appName, appUrl, description, githubUrl, chipData})
    console.log(data)
  }
  
  return {appName, inputAppName,
    appUrl, inputAppUrl,
    description, inputDescription,
    githubUrl, inputGithubUrl,
    create
  }

}

export default useEditPortfolio
