import React from 'react'
import BoxTextInput from '../../UIkit/BoxTextInput';
import TextInput from '../../UIkit/TextInput';
import { useState, useCallback } from 'react';
import { SelectButton } from '../../UIkit/SelectButton';
import SimpleDarkButton from '../../UIkit/SimpleDarkButton';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import ImageArea from '../ImageArea/ImageArea';


export const EditProfile = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [images, setImages] = useState([])

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <section className="pt-5 w-4/6 mx-auto">
      <h2 className="font-serif font-semibold text-2xl text-center" >アプリを出展</h2> 
      <div className="w-2/3 mx-auto">
      <ImageArea images={images} setImages={setImages}/>
        <BoxTextInput
        fullWidth={true} label="ニックネーム" multiline={false} required={true} 
        onChange="" rows={1} value="" type={"text"} placeholder={"Education-Bridge"}
        />
        <BoxTextInput
        fullWidth={true} label="自己紹介" multiline={true} required={true} 
        onChange="" rows={4} value="" type={"text"} placeholder={"Education-Bridge"}
        />
        <div className="flex justify-center">
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="プログラミングを開始した日"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <BoxTextInput
          fullWidth={true} label="Webサイト" multiline={true} required={true} 
          onChange="" rows={4} value="" type={"text"} placeholder={"Education-Bridge"}
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
