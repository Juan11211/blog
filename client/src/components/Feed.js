import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Container = styled.div` 
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 30px;
  width: 100vh;
  margin: 20px;
  margin-bottom: 30px; /* Add margin bottom to move the hr line further down */
`;

const ContainerImage = styled.img` 
  width: 100vh;
  height: 50vh;
  display: flex;
  justify-content: center;
`

const Description = styled.p` 
  width: 100vh;
  margin: 5px 5px;
  
`
const Title = styled.h2` 
width: 100vh;
margin-top: 20px;

`
const Hr = styled.hr`
  
  margin-top: 15px;
`


const data = [
    { 
    "img": "https://techcrunch.com/wp-content/uploads/2023/02/chatgpt-bing.jpg?w=1390&crop=1",
    "title": "Bing said to remove waitlist for its GPT-4 powered chat",
    "desc": "Microsoft’s Bing is enjoying the spotlight for the first time in a decade after it released a GPT-powered interface last month. But the tech giant has so far been cautious about the pace at which it is making the new Bing offering — powered by  OpenAI’s GPT-4 tech — available to users. But it appears, Bing is bringing those walls down."
},
{ 
    "img": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1248373493-e1678974907596.jpg?w=1390&crop=1",
    "title": "The UK joins other countries in banning TikTok from Government devices",
    "desc": "Microsoft’s Bing is enjoying the spotlight for the first time in a decade after it released a GPT-powered interface last month. But the tech giant has so far been cautious about the pace at which it is making the new Bing offering — powered by  OpenAI’s GPT-4 tech — available to users. But it appears, Bing is bringing those walls down."
},
{ 
    "img": "https://techcrunch.com/wp-content/uploads/2023/02/chatgpt-bing.jpg?w=1390&crop=1",
    "title": "Bing said to remove waitlist for its GPT-4 powered chat",
    "desc": "Microsoft’s Bing is enjoying the spotlight for the first time in a decade after it released a GPT-powered interface last month. But the tech giant has so far been cautious about the pace at which it is making the new Bing offering — powered by  OpenAI’s GPT-4 tech — available to users. But it appears, Bing is bringing those walls down."
},
{ 
    "img": "https://techcrunch.com/wp-content/uploads/2023/02/chatgpt-bing.jpg?w=1390&crop=1",
    "title": "Bing said to remove waitlist for its GPT-4 powered chat",
    "desc": "Microsoft’s Bing is enjoying the spotlight for the first time in a decade after it released a GPT-powered interface last month. But the tech giant has so far been cautious about the pace at which it is making the new Bing offering — powered by  OpenAI’s GPT-4 tech — available to users. But it appears, Bing is bringing those walls down."
}
]



function Feed() {
  return (
    <div>
      <Navbar />
      <Container>
        {data.map((post) => (
          <div>
            <Title>{post.title}</Title>
            <ContainerImage src={post.img} />
            <Description>{post.desc}</Description>
            <Hr />
          </div>
        ))}
      </Container>
      <Hr />
    </div>
  )
}

export default Feed
