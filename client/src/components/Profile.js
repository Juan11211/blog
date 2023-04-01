import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`

const BannerPhoto = styled.div`
  width: 100%;
  height: 200px;
  background-image: url('https://i.pinimg.com/474x/20/8f/35/208f3504831dbe47efa08371a57fc879.jpg');
  background-size: cover;
  background-position: center;
`

const Avatar = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  background-color: gray;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`

const NameContainer = styled.div`
  display: flex; 
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: -30px;
  align-items: center;
`

const Hr = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid black;
  width: 100%;
`

const Name = styled.h2`
  margin-top: 30px;
  margin-bottom: 10px; /* Add margin to the bottom of Name */
`

const Bio = styled.p`
  margin: 10px 0 20px 0; /* Add margin to the top and bottom of Bio */
`

function Profile() {
  const { 
    user: { 
      username 
    }
  } = useContext(UserContext)

  return (
    <Container>
      <BannerPhoto />
      <Avatar />
      <ProfileContainer>
        <NameContainer>
          <Name>{username ? `Welcome ${username}!` : 'Loading...'}</Name>
        </NameContainer>
        <Bio>27 - Web Dev - NYC</Bio>
        <Hr />
      </ProfileContainer>
    </Container>
  )
}

export default Profile
