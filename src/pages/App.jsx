import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Blogs from './Blogs';
import NoPage from './NoPage';
import About from './About';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NoPage />}/>
      </Route>
    </Routes>
  );
}

