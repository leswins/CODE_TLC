import React from 'react';
import './NewPost.scss';
import {TextField, Button, Typography, makeStyles, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles ({
  disabledButton: {
    color: '#000020',
    variant: 'outlined'
  },
  enabledButton: {
    color: '#00ED65'
  }
})

const disabledButton = {
  color: '#000020',
  variant: 'outlined'
};
const enabledButton = {
  color: '#00ED65'
};

class NewPost extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      caption: ''
    };
  }

  isIncomplete() {
    const { name, caption } = this.state;

    return !name || !caption;
  }

  getButtonProps() {
      return this.isIncomplete() ? disabledButton : enabledButton 
  }

  onNameInputChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  
  onCapInputChange = (event) => {
    this.setState({
      caption: event.target.value
    })
  }

  render() {
    const { name, caption } = this.state;
    return (
      <div className="NewPostModal">

      <img src="https://i.imgur.com/9wF1kZd.jpeg" class="UploadedImg"></img>

      <div class="TextWrapper">
      <Typography
      variant='h6'
      color='textPrimary'>
        Share more about this memory with Terrence
      </Typography>
      </div>

      <div class="FieldWrapper"><TextField
      onChange={this.onNameInputChange}
      value={name}
      label="Your Name"
      fullWidth>
      </TextField></div>
      
      <div class="FieldWrapper"><TextField
      onChange={this.onCapInputChange}
      label="About This Memory"
      multiline
      fullWidth>
      </TextField></div>

      <div class="CTAWrapper">
        <div class="IconWrapper"><IconButton
        aria-label="delete"
        color="secondary"
        size="medium">
          <CloseIcon fontSize="large"/>
        </IconButton></div>

        <div class="ButtonWrapper"><Button
        {...this.getButtonProps()}>
        SHARE
        </Button></div>
      </div>
    </div> 
    );
  }

}

export default NewPost;