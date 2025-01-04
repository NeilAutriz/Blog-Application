import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Blogs from './Blogs';
import NoPage from './NoPage';
import About from './About';
import AddPost from './AddPost';
import { useState } from 'react';
import PostPage from './PostPage';
import EditPost from './EditPost';
import useWindowSize from '../hooks/useWindowSize';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';

export default function App() {
  const dataUrl = 'http://localhost:3500/posts';
    const fetchedData = useFetch(dataUrl);
    const [posts, setPosts] = useState([]);
    const { width } = useWindowSize();

    // Sync posts state with fetched data
    useEffect(() => {
        setPosts(fetchedData);
    }, [fetchedData]);


  return (
    <Routes>
      <Route path='/' element={<Layout width={width}/>}>
        <Route index element={<Home width={width}/>} />
        <Route path='blogs' element={<Blogs posts={posts}/>} />
        <Route path='blogs/:id' element={<PostPage posts={posts} setPosts={setPosts} dataUrl={dataUrl}/>} />
        <Route path='about' element={<About />} />
        <Route path='edit/:id' element={<EditPost posts={posts} setPosts={setPosts} dataUrl={dataUrl}/>} />
        <Route path='add' element={<AddPost posts={posts} setPosts={setPosts} dataUrl={dataUrl}/>} />
        <Route path='*' element={<NoPage />}/>
      </Route>
    </Routes>
  );
}