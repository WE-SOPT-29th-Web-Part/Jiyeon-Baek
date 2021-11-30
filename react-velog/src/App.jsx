import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Write from './pages/Write';
import Article from './pages/Article';
import SeriesCategory from 'components/home/SeriesCategory';
import ArticlesContainer from 'components/home/ArticlesContainer';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/write" element={<Write />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/article/edit/:id" element={<Write />} />
          <Route path="/" element={<Home />}>
            <Route path="/" element={<ArticlesContainer />} />
            <Route path="/series" element={<SeriesCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
