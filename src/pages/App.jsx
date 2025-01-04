import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Blogs from './Blogs';
import NoPage from './NoPage';
import About from './About';
import AddPost from './AddPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import { DataProvider } from '../context/DataContext';

export default function App() {
  return (
    <DataProvider > 
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='blogs/:id' element={<PostPage />} />
          <Route path='about' element={<About />} />
          <Route path='edit/:id' element={<EditPost />} />
          <Route path='add' element={<AddPost />} />
          <Route path='*' element={<NoPage />}/>
        </Route>
      </Routes>
    </DataProvider>
  );
}