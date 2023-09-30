import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header'
import Home from './pages/Home/Home'
import Movie from './pages/MovieDetails/Movie'
import MovieList from './Components/MovieList/MovieList'
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </BrowserRouter>
      </Provider>
        
    </div>
  );
}

export default App;