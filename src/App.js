import './App.css';
import './data/fonts/Roboto-Medium.ttf'
import './data/fonts/Roboto-Light.ttf'
import './data/fonts/Roboto-Regular.ttf'
import './data/fonts/RobotoCondensed-Regular.ttf'
import './data/fonts/RobotoSlab-Medium.ttf'
import './data/fonts/RobotoSlab-Regular.ttf'
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
