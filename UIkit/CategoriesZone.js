import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { useTheme } from "@material-ui/core/styles";
import { useState } from 'react';



export default function CategoriesZone({chipData, handleDelete}) {
  const theme = useTheme();
  return (
    <Paper component="ul" className=" flex justify-items-center  py-2 flex-wrap list-none h-36 overflow-y-scroll">
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip 
            className="mx-2 my-1"
            label={data.name}
            onDelete={handleDelete(data)} 
            variant="outlined" 
            color="secondary"
            />
          </li>
        )
      })}
    </Paper>
  )
}
