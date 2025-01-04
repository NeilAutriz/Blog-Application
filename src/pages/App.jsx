import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Blogs from './Blogs';
import NoPage from './NoPage';
import About from './About';
import AddPost from './AddPost';
import { useEffect, useState } from 'react';
import PostPage from './PostPage';
import EditPost from './EditPost';
import api from '../api/blogPosts';

export default function App() {
  const dataUrl = 'http://localhost:3500/posts'
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try{
        const response = await api.get(dataUrl);
        setPosts(response.data);
      } catch (error){
        console.error(error);
      }
    }

    getPosts();

  }, [])


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
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