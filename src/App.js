
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './Main/Jumbotron';



function App() {
  return (
    <div>
      <Header />
      <Jumbotron></Jumbotron>

      <Main />
      <Footer />
      
    </div>
  );
}

export default App;
