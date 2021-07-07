import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import {IconButton, Badge } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EditIcon from '@material-ui/icons/Edit';
import { useRouter } from 'next/router';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from "next/link";

export default function PortfolioCard({title, id, image, deletePorrtfolio}) {
  const router = useRouter()
  console.log(image)
  return (
    <Card className="h-96 w-80 whitespace-nowrap ml-5">
      <CardHeader 
      className="bg-gray-800 text-white h-16 text-center border-gray-400 border-b-2 border-solid"
        title={title}   
      />
      <div className="relative" >
        <div className="flex justify-center  bg-gray-800">
          <IconButton >
            {image ? (
              <Link href={`/portfolios/${id}`}>
              <CardMedia
              className="h-72 w-72 rounded-full my-auto"
              image={image}  
              />
              </Link>
            ):(
              <CardMedia
              className="h-72 w-72 rounded-full my-auto"
              image="../../static/null_avatar.jpeg" 
            />
            )}
          </IconButton>
        </div>

        <div className="absolute bottom-0 right-1">
          <IconButton >
            <EditIcon
            fontSize="large" 
            className="text-white" 
            onClick={()=>
              {router.push({
                pathname:"/edit-portfolio",   
                query: { 
                  portfolioId: id
                  }
                })
              }}
            />
          </IconButton>
        </div> 

        <div className="absolute bottom-0 left-1">
          <IconButton >
            <DeleteIcon
            fontSize="large" 
            className="text-white" 
            onClick={()=>{
              deletePorrtfolio(id)
            }}
            />
          </IconButton>
        </div> 
        <div className="absolute top-0 right-3">
          <IconButton >
          <Badge badgeContent={1000}  max={999}  className="text-white" >
            <ThumbUpIcon 
              className="text-white" 
              fontSize="large" 
              disabled="true"
              />
          </Badge>
          </IconButton>
        </div> 
      </div>  
    </Card>
  );
}