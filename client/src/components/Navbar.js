import React, { useState } from 'react';
import styled from 'styled-components';
import { AccountCircleOutlined, ForumOutlined, HomeOutlined, LogoutOutlined, PeopleAltOutlined, MenuOutlined } from '@mui/icons-material';

import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    VideoLogo 
  
  } from "../styles/Navbar.style";

  
// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
  
//   margin: 0 auto;
//   padding: 10px;
// `;

// const Logo = styled.div``;

// const Icons = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   gap: 10px;
// `;

// const LargeScreenIcons = styled.div`
//   display: none;

//   @media (min-width: 600px) {
//     display: flex;
//   }

//   @media (min-width: 960px) {
//     display: flex;
//   }
// `;

// const BurgerIcon = styled(MenuOutlined)`
//   display: block;
//   font-size: 2rem;
//   cursor: pointer;

//   @media (min-width: 600px) {
//     // display: none;
//   }
// `;


// const MobileMenuWrapper = styled.div`
//   display: block;

//   @media (min-width: 600px) {
//     display: none;
//   }
// `;

// const MobileMenu = styled.div`
//   position: absolute;
//   top: 70px;
//   right: 0;
//   width: 50vh;
//   height: 50vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #f5f5f5;
// `;

// const MobileMenuIcon = styled.div`
//   font-size: 3rem;
//   cursor: pointer;
// `;

// const MobileMenuOptions = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

export default function Navbar() {
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

//   return (
//     <Container>
//       <Logo>
//         <h3>Coding Corner</h3>
//       </Logo>
//       <Icons>
//         <LargeScreenIcons>
//           <HomeOutlined />
//           <AccountCircleOutlined />
//           <PeopleAltOutlined />
//           <ForumOutlined />
//           <LogoutOutlined />
//         </LargeScreenIcons>
//         <BurgerIcon onClick={toggleMobileMenu} />
//       </Icons>
//       <MobileMenuWrapper>
//         {showMobileMenu && (
//           <MobileMenu>
//             <MobileMenuIcon onClick={toggleMobileMenu}>
              
//             </MobileMenuIcon>
//             <MobileMenuOptions>
//               <HomeOutlined />
//               <AccountCircleOutlined />
//               <PeopleAltOutlined />
//               <ForumOutlined />
//               <LogoutOutlined />
//             </MobileMenuOptions>
//           </MobileMenu>
//         )}
//       </MobileMenuWrapper>
//     </Container>
//   );
// }

// export default Navbar;


//import React, { useState } from "react";

  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
          <NavbarContainer>
              <img src="https://www.canva.com/design/DAFeoxkdPU4/Wx8hf_VhHyNsi3AsC5Gzkg/watch?utm_content=DAFeoxkdPU4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"  />
      {/* rest of your navbar code */}
    </NavbarContainer>
            <NavbarLink to="/"> <HomeOutlined /></NavbarLink>
            <NavbarLink to="/profile"> <AccountCircleOutlined /></NavbarLink>
            <NavbarLink to="/friends"> <PeopleAltOutlined /></NavbarLink>
            <NavbarLink to="/messages"> <ForumOutlined /></NavbarLink>
            <NavbarLink to='/logout'><LogoutOutlined /></NavbarLink>
          
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"><HomeOutlined /></NavbarLinkExtended>
          <NavbarLinkExtended to="/"><AccountCircleOutlined /></NavbarLinkExtended>
          <NavbarLinkExtended to="/"><PeopleAltOutlined /></NavbarLinkExtended>
          <NavbarLinkExtended to="/"><ForumOutlined /></NavbarLinkExtended>
          <NavbarLinkExtended to="/"><LogoutOutlined /></NavbarLinkExtended>
          
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
