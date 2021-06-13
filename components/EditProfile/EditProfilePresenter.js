import React from 'react'
import BoxTextInput from '../../UIkit/BoxTextInput';
import SimpleDarkButton from '../../UIkit/SimpleDarkButton';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import ImageArea from '../ImageArea/ImageArea';
import RequiredTextCounter from '../../UIkit/RequiredTextCounter';



const EditProfilePresenter = ({
  images, uploadImage, deleteImage, 
  selectedDate, handleDateChange,
  inputNickName, nickName,
  inputSelfIntroduction, selfIntroduction,
  inputWebSite, webSite,userId,
  create
}) => {
  return (
    <section className="pt-5 w-4/6 mx-auto">
    <h2 className="font-serif font-semibold text-2xl text-center" >プロフィールを登録する</h2> 
    <div className="w-2/3 mx-auto">
    <ImageArea images={images} uploadImage={uploadImage} deleteImage={deleteImage} />
      <RequiredTextCounter target={nickName} limit={20} className="mr-auto" />
      <BoxTextInput
      fullWidth={true} label="ニックネーム" multiline={false} required={true} 
      onChange={inputNickName} rows={1} value={nickName} type={"text"} 
      placeholder={"20文字以内で入力してください"} color="secondary"
      />

      <RequiredTextCounter target={selfIntroduction} limit={400} className="mr-auto" />
      <BoxTextInput
      fullWidth={true} label="自己紹介" multiline={true} required={true} 
      onChange={inputSelfIntroduction} rows={4} value={selfIntroduction} type={"text"} 
      placeholder={"400文字以内で入力してください"} color="secondary" 
      />

      <div className="flex justify-center">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          color="secondary" required="true"
          disableToolbar variant="inline"
          inputVariant="filled" className="bg-gray-100" 
          format="MM/dd/yyyy" margin="normal"
          id="date-picker-inline" label="プログラミングを開始した日"
          value={selectedDate} onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          />
        </MuiPickersUtilsProvider>
      </div>

      <BoxTextInput
        fullWidth={true} label="Webサイト" multiline={true} required={false} 
        onChange={inputWebSite} rows={4} value={webSite} type={"text"} 
        placeholder={""} color="primary"
      />

    </div>
    <div  className="flex pt-20 justify-evenly">
        <SimpleDarkButton
        className="text-2xl font-serif"
        label={"登録"}
        onClick={()=>create({userId, images, nickName, selfIntroduction, webSite, selectedDate})}
        />
    </div>   
  </section>
  )
}

export default EditProfilePresenter
