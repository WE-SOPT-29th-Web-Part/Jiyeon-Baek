import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Write from './pages/Write';
import SeriesCategory from 'components/home/SeriesCategory';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/series" element={<SeriesCategory />} />
          </Route>
          <Route path="/write" element={<Write />} />
          <Route path="/*" element={() => <div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
