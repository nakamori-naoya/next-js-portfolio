import React from 'react'
import { useState, useCallback, useEffect } from 'react';
import { createPortfolio, updatePortfolio } from '../lib/portfolio';
import { useRouter } from 'next/router';

const useEditPortfolio = () => {
  const router = useRouter()
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


  const create = async({images, appName, appUrl, description, githubUrl, chipData , userId}) =>{
    const res = await createPortfolio({images, appName, appUrl, description, githubUrl, chipData, userId})
    if(res.status === 201){
      router.push("/portfolio-cards");
    }else if(res.status === 404){
      alert(res.data)
    }else{
      console.log(res.data)
    }
  }
  

  const update = async({id,images, appName, appUrl, description, githubUrl, chipData , userId}) =>{
    const res = await updatePortfolio({id,images, appName, appUrl, description, githubUrl, chipData, userId})
    if(res.status === 201){
      router.push("/portfolio-cards");
    }else if(res.status === 404){
      alert(res.data)
    }else{
      console.log(res.data)
    }
  }
  return {appName, inputAppName,
    appUrl, inputAppUrl,
    description, inputDescription,
    githubUrl, inputGithubUrl,
    setAppName,setAppUrl, setDescription,setGithubUrl,
    create,update
  }

}

export default useEditPortfolio
