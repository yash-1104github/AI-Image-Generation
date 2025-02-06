import  styled, { ThemeProvider } from "styled-components";
import { lightTheme,darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";



const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
 background: ${({ theme }) => theme.bg};  
color: ${({ theme }) => theme.text_primary};
overflow-y: hidden;
overflow-x: hidden;
transition: all 0.2s ease;
`

const Wrapper = styled.div`
   height: 100%;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   flex: 3;
`

function App() {

  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };
 
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post" element={<CreatePost />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

export default App;