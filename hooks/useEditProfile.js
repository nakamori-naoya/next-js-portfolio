import { useState ,useCallback } from 'react';
import { useRouter } from "next/router";

const useEditProfile = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [nickName, setNickName] = useState("")
  const [selfIntroduction, setSelfIntroduction] = useState("")
  const [webSite, setWebSite] = useState("")

  const inputNickName = useCallback((event) => {
    setNickName(event.target.value)
  },[setNickName])

  const inputSelfIntroduction = useCallback((event) => {
    setSelfIntroduction(event.target.value)
  },[setSelfIntroduction])

  const handleDateChange = useCallback((date) => {
    setSelectedDate(date);
  },[setSelectedDate])

  const inputWebSite = useCallback((event) => {
    setWebSite(event.target.value)
  },[setWebSite])



  return {inputNickName, inputSelfIntroduction, 
          handleDateChange, inputWebSite, webSite,
          selectedDate, nickName, selfIntroduction,
        }
}

export default useEditProfile
