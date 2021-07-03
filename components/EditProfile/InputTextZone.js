import React from 'react'
import BoxTextInput from '../../UIkit/BoxTextInput';
import RequiredTextCounter from '../../UIkit/RequiredTextCounter';

const InputTextZone = React.memo(({
  inputNickName, nickName,
  inputSelfIntroduction, selfIntroduction,
  inputWebSite, webSite
}) => {
  return (
    <>
      <RequiredTextCounter target={nickName} limit={20} className="mr-auto" />
      <BoxTextInput
      fullWidth={true} label="ニックネーム" multiline={false} required={true} 
      onChange={inputNickName} rows={1} value={nickName} type={"text"} 
      placeholder={"20文字以内で入力してください"} 
      />
      <RequiredTextCounter target={selfIntroduction} limit={400} className="mr-auto" />
      <BoxTextInput
      fullWidth={true} label="自己紹介" multiline={true} required={true} 
      onChange={inputSelfIntroduction} rows={4} value={selfIntroduction} type={"text"} 
      placeholder={"400文字以内で入力してください"} 
      />
      <BoxTextInput
        fullWidth={true} label="Webサイト" multiline={true} required={false} 
        onChange={inputWebSite} rows={4} value={webSite} type={"text"} 
        placeholder={"任意で入力してください"} 
      />
    </>
  )
})

export default InputTextZone
