import { useState ,useCallback } from 'react';
import { useRouter } from "next/router";
import { createProfile } from '../../working/src/lib/profile';

const useEditProfile = () => {
  const router = useRouter();
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

  const create = async({userId, images, nickName, selfIntroduction, webSite, selectedDate})=>{
    await createProfile({
      userId, images, 
      nickName, selfIntroduction, 
      webSite, selectedDate
    })
    router.push("/portfolio-cards");
  }

  return {inputNickName, inputSelfIntroduction, 
          handleDateChange, inputWebSite, webSite,
          selectedDate, nickName, selfIntroduction,
          create
        }
}

export default useEditProfile
