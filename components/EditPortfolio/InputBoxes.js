import React from 'react'
import BoxTextInput from '../../UIkit/BoxTextInput';
import RequiredTextCounter from '../../UIkit/RequiredTextCounter';

const InputBoxes = React.memo(({
  appName, inputAppName, appUrl, inputAppUrl,
  description, inputDescription,githubUrl, inputGithubUrl,
}) => {
  return (
    <>
    <h2 className="-mt-4 pt-4 font-serif font-semibold text-2xl text-center" >アプリを出展</h2> 
      <RequiredTextCounter target={appName} limit={30} className="mr-auto" />
      <BoxTextInput
      fullWidth={true} label={"アプリ名"} multiline={false} required={true} 
      onChange={inputAppName} rows={1} value={appName} type={"text"} placeholder={"Education-Bridge"}
      />
      <BoxTextInput
      fullWidth={true} label={"アプリのURL"} multiline={false} required={true}
      onChange={inputAppUrl} rows={1} value={appUrl} type={"text"} placeholder={"https://ec-app-b602f.firebaseapp.com/"}
      />
      <BoxTextInput
      fullWidth={true} label={"GithubのURL"} multiline={false} required={true}
      onChange={inputGithubUrl} rows={1} value={githubUrl} type={"text"} placeholder={"https://ec-app-b602f.firebaseapp.com/"}
      />
      <RequiredTextCounter target={description} limit={400} className="mr-auto" />
      <BoxTextInput
      fullWidth={true} label={"アプリの説明"} multiline={true} required={true}
      onChange={inputDescription} rows={10} value={description} type={"text"} placeholder={"制作背景・こだわり・作ってみての感想etc"}
      />
    </>  
  )
})

export default InputBoxes
