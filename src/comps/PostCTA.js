import React from 'react';
import './MainCTA.scss';
import {Button, Typography, makeStyles, IconButton} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const PostCTA = () => {
    return (
      <div class="MainCTA">
        <IconButton
        aria-label="NewPhoto"
        size="inherit">
          <AddCircleIcon fontSize="large"/>
        </IconButton>
      </div>
    )
  }
  
  export default PostCTA;