import React from 'react'
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Input from '@mui/material/Input';

function Login({ openLoginModal, setOpenLoginModal }) {

  const closeLoginModal = () => {
    setOpenLoginModal(false);
    const handleSubmit = () => {
      setOpenLoginModal(false)
    return (
      <Dialog
        open={openLoginModal}
        aria-labelledby="form=-dialog-title"
        style={{ width: '100&', maxWidth: '450px', margin: '0px auto' }}
      >

      <div style={{ width: "100%", display: 'flex', justifyContent: 'flex-end' }}>


          <IconButton onClick={closeLoginModal}>
            <CloseIcon />
          </IconButton>

      </div>

        <Typography variant="h5" style={{ color: 'black', textAlign: 'center' }}>
          SIgn In
        </Typography>


        {/* card */}
        <form onSubmit={handleSubmit} style={{ padding: '40px' }}>
          <FormControl style={{width: '100%', margin: '0px 8px' }}>
            <InputLabel>
              Email
            </InputLabel>
            <Input
              type="email"
              onChange={(e) => console.log('onChange')}
              required
            />
          </FormControl>
        </form>

      </Dialog>
    )
  }
}
}
export default Login;