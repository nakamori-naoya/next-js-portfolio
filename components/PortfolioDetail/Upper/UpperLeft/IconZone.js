import React from 'react'
import  DesktopMacIcon  from '@material-ui/icons/DesktopMac';
import GitHubIcon  from '@material-ui/icons/GitHub';
import  {Badge, IconButton}  from '@material-ui/core';
import  ThumbUpIcon  from '@material-ui/icons/ThumbUp';
import  Avatar  from '@material-ui/core/Avatar';
import LanguageIcon from '@material-ui/icons/Language';
import { useRouter } from "next/router";
const IconZone = React.memo(({siteUrl, githubUrl, profileImage, userId}) => {
  const router = useRouter();
  return (
    <div className="flex justify-evenly">
      <IconButton onClick={() => window.open(githubUrl, '_blank')}>
        <GitHubIcon fontSize="large" className="text-gray-700"/>  
      </IconButton>

      <IconButton>
        <LanguageIcon   onClick={() => window.open(siteUrl, '_blank')} style={{ fontSize: 45 }} className="text-gray-700"/>
      </IconButton>

      <IconButton  onClick={() => router.push("/profile-editor")}>
        <Avatar  style={{ fontSize: 45 }}  src={profileImage} className="text-gray-700"/>
      </IconButton>

      <IconButton >
        <Badge badgeContent={1000}  max={999} color="secondary">
          <ThumbUpIcon fontSize="large" className="text-gray-700"/>  
        </Badge>
      </IconButton>
    </div>
  )
})

export default IconZone
