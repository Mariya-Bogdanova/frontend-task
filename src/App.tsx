import { Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Header from './components/Header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.scss';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
