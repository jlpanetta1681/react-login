import React, {useState} from 'react'
import { Button, Typography }from '@mui/material'
import Login from '../components/login/Login'


function LandingView({setIsLoggedIn}) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const openModal = () => {
    setOpenLoginModal(true);
  }
  return (
    <div style={{width:"100%", display:'flex', height:"100vh", justifyContent:"center", alignItems: "center" }}>

          <Button variant="contained" style={{display:"flex", right:'32px'}} onClick={() => openModal}>Log In</Button>
          <Login openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} isLoggedIn={setIsLoggedIn}
          />
          <Typography>This is the landing view</Typography>

    </div>
  )
}

export default LandingView