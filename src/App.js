//import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import {light, dark} from './styles/Theme';

import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Roadmap from './components/sections/Roadmap/Roadmap';
import Showcase from './components/sections/Showcase/Showcase';
import Team from './components/sections/Team/Team';
import Faq from './components/sections/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
