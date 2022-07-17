import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound'
import MovieDetail from './components/MovieDetail/MovieDetail';
import Header  from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss'


function App() {
  return (
    <Router>
      <Header></Header>
      <main className='container'>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/movie/:mid' exact element={<MovieDetail/>}/>
      <Route element={<PageNotFound/>}></Route>  
   
      </Routes>
      </main>  
      <Footer></Footer>
    </Router>
  );
}

export default App;
