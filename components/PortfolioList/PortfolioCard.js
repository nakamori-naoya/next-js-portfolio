import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { IconButton, Badge } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Link from "next/link";
import { useEffect, useState } from 'react';
import { imageUrlConverter } from '../../Validator/ImageUrlConverter';




export default function PortfolioCard(props) {
  const [portfolioImages, setPortfolioImages] = useState("")
  useEffect(() => {
    setPortfolioImages(imageUrlConverter(props.images))
  }, [props.images])
  return (
    <Card className="h-96 w-80 whitespace-nowrap ml-5">
      <CardHeader 
      className="bg-gray-800  text-white h-20 text-center border-gray-400 border-b-2 border-solid"
        title={props.title}   
      />
      
      <div className="relative" >
        <div className="flex justify-center bg-gray-800">
          <IconButton >
            <Link href={`/portfolios/${props.id}`}>
            {props.images ? (
              <CardMedia
              className="h-72 w-72 rounded-full my-auto"
              image={portfolioImages}  
            />
            ):(
              <CardMedia
              className="h-72 w-72 rounded-full my-auto"
              image="../../static/null_avatar.jpeg" 
            />
            )}
            </Link>
          </IconButton>
        </div>
        <div className="absolute top-0 right-3">
          <IconButton >
            <Badge badgeContent={1000}  max={999} className="text-white">
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