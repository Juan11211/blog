import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider.js';
import styled from 'styled-components';
import { ModeEdit } from '@mui/icons-material';

const Container = styled.div`
  position: relative;
`;

const BannerPhoto = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('https://i.pinimg.com/474x/20/8f/35/208f3504831dbe47efa08371a57fc879.jpg');
  background-size: cover;
  background-position: center;
`;

const Avatar = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  background-color: gray;
  position: absolute;
  top: 50-ffff%; /* Center the Avatar circle */
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 70px; /* Move everything up without affecting Avatar position */
`;

const NameContainer = styled.div`
  display: flex; 
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: -30px;
  align-items: center;
`;

const Hr = styled.hr`
margin: 0 auto;
border: none;
border-top: 1px solid black;
width: 100%;
margin-top: -70px;
margin-bottom: 30px;
`;

const Name = styled.h2`
  margin-bottom: 10px; /* Add margin to the bottom of Name */
`;

const Bio = styled.p`
  margin: 20px 0 0 0;

  & > span {
    display: block;
    text-align: center;
    margin-bottom: 10px; /* Add margin below each span */
  }

  .button-container {
    
    display: flex;
    
    margin-top: 10px; /* Add margin above the button container */
  }
`;


const FeedContainer = styled.div`
  margin-top: 30px; /* Add margin top to FeedContainer */
`;
const FeedTitle = styled.div`
  margin-bottom: 10px; /* Add margin bottom to FeedTitle */
`;
const FeedPost = styled.div``;
const Post = styled.div``;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 120px;
  justify-content: center;
  border-radius: 30%;
  height: 30px;  
  margin-left: 45px;
`;

const ProfileOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
  width: 100%;

  p {
    text-align: center;
    flex: 1;
    display: flex;
    justify-content: space-evenly;
  }
`;




function Profile() {
  const { user: { username }, addPost, posts, getUserPosts, userState } = useContext(UserContext);

  useEffect(() => { 
    getUserPosts()
  }, [])

  console.log(getUserPosts)

  return (
    <Container>
      <BannerPhoto />
      <Avatar />
      <ProfileContainer>
        <NameContainer>
          <Name>{username ? `Hi ${username}!` : 'Loading...'}</Name>
        </NameContainer>
        <Bio>
          <span>New York, NY</span>
          <span>Web Developer</span>
          <div className="button-container">
            <Button><ModeEdit /> Edit Profile</Button>
          </div>
          <ProfileOptions>
            <p>Following</p>
            <p>Followers</p>
            <p>Posts</p>
            <p>Logout</p>
          </ProfileOptions>
        </Bio>
      </ProfileContainer>
      <Hr />
      <FeedContainer>
        <FeedTitle>Your Journal</FeedTitle>
        <FeedPost>
        {userState && userState.posts.map(post => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
          </FeedPost>
        
      </FeedContainer>
    </Container>
  )
}

export default Profile;
