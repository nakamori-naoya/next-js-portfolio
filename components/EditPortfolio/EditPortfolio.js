import React from 'react'
import BoxTextInput from '../../UIkit/BoxTextInput';
import TextInput from '../../UIkit/TextInput';
import { useState, useCallback } from 'react';
import { SelectButton } from '../../UIkit/SelectButton';
import SimpleDarkButton from '../../UIkit/SimpleDarkButton';



export const EditPortofolio = () => {
  const [appName, setAppName] = useState("")
  const [appUrl, setAppUrl] = useState("")
  const [backgroundOfCreation, setBackgroundOfCreation] = useState("")
  const [remakablePoints, setRemakablePoints] = useState("")
  const [futureIssue, setFutureIssue] = useState("")
  const [usability, setUsability] = useState(0);
  const [businessOriented, setBusinessOriented] = useState(0);
  const [sociality, setSociality] = useState(0);
  const [creativity, setCreativity] = useState(0);
  const [skill, setSkill] = useState(0);

  const  inputAppName  = useCallback((event) => {
    setAppName(event.target.value)
  }, [setAppName]);

  const  inputAppUrl  = useCallback((event) => {
    setAppUrl(event.target.value)
  }, [setAppUrl]);

  const  inputBackgroundOfCreation  = useCallback((event) => {
    setBackgroundOfCreation(event.target.value)
  }, [setBackgroundOfCreation]);

  const  inputRemakablePoints  = useCallback((event) => {
    setRemakablePoints(event.target.value)
  }, [setRemakablePoints]);

  const  inputFutureIssue  = useCallback((event) => {
    setFutureIssue(event.target.value)
  }, [setFutureIssue]);


  const  selectUsability  = useCallback((event) => {
    setUsability(event.target.value)
  }, [setUsability]);

  const  selectBusinessOriented  = useCallback((event) => {
    setBusinessOriented(event.target.value)
  }, [setBusinessOriented]);

  const  selectSociality  = useCallback((event) => {
    setSociality(event.target.value)
  }, [setSociality]);

  const  selectCreativity  = useCallback((event) => {
    setCreativity(event.target.value)
  }, [setCreativity]);

  const  selectSkill  = useCallback((event) => {
    setSkill(event.target.value)
  }, [setSkill]);


  return (
    <section className="pt-5 w-4/6 mx-auto">
      {/* アプリのidがあるかないかで条件分岐させる。出展or編集 */}
      <h2 className="font-serif font-semibold text-2xl text-center" >アプリを出展</h2> 
      <div className="w-2/3 mx-auto">
        <BoxTextInput
        fullWidth={true} label={"アプリ名"} multiline={false} required={true} 
        onChange={inputAppName} rows={1} value={appName} type={"text"} placeholder={"Education-Bridge"}
        />
        <BoxTextInput
        fullWidth={true} label={"アプリのURL"} multiline={false} required={true}
        onChange={inputAppUrl} rows={1} value={appUrl} type={"text"} placeholder={"https://ec-app-b602f.firebaseapp.com/"}
        />
        <TextInput
        fullWidth={true} label={"作成の動機"} multiline={true} required={true} 
        onChange={inputBackgroundOfCreation} rows={3} rowsMax={5} value={backgroundOfCreation} type={"text"} placeholder={"あなたがなぜこのアプリを作成したのかをご記入ください。"}
        />
        <TextInput
        fullWidth={true} label={"ここに注目"} multiline={true} required={true}
        onChange={inputRemakablePoints} rows={3} rowsMax={5} value={remakablePoints} type={"text"} placeholder={"あなたがこのアプリの特にここ見て欲しいという部分をご記入ください"}
        />
        <TextInput
        fullWidth={true} label={"今後の課題"} multiline={true} required={true}
        onChange={inputFutureIssue} rows={3} rowsMax={5} value={futureIssue} type={"text"} placeholder={"Firebaseでのクエリの投げ方がいまいち分からず、ユーザーが検索する際に・・・"}
        />
      </div>
      

        <div  className="flex pt-20 justify-evenly">
          <SimpleDarkButton
          className="h-14 w-36 hover:bg-black"
          label={"登録"}
          // onClick={()=>dispatch(savePortfolio(id, appName, appUrl, githubUrl, snsUrl, backgroundOfCreation, remakablePoints, futureIssue, usability, businessOriented, sociality,creativity, skill, totalCount, images))}
          />
        </div> 
    </section>
  )
}
