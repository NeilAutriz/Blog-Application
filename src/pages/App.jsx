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

// Magcreate ng pangedit 

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const initialPosts = [
      {
        "id": 1,
        "title": "1st post",
        "datetime": "July 16, 2021 11:47:39 AM",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "author": "Steve Jobs"
      },
      {
        "id": 2,
        "title": "Second post",
        "datetime": "July 16, 2021 11:47:48 AM",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. two",
        "author": "Steve Jobs"
      },
      {
        "id": 3,
        "title": "Number Three",
        "datetime": "July 16, 2021 11:48:01 AM",
        "body": "Third post... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "author": "Steve Jobs"
      },
      {
        "id": 4,
        "title": "Testing a 4th post",
        "datetime": "August 02, 2021 11:46:27 AM",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "author": "Steve Jobs"
      },
      {
        "id": 5,
        "title": "Fifth Posst",
        "datetime": "July 16, 2021 11:47:39 AM",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "author": "Steve Jobs"
      },
      {
        "id": 6,
        "title": "Fifth Posst",
        "datetime": "July 16, 2021 11:47:39 AM",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "author": "Steve Jobs"
      }
    ]
    if(posts.length === 0 && posts){
      setPosts(initialPosts)
    }
  }, [posts])


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='blogs' element={<Blogs posts={posts}/>} />
        <Route path='blogs/:id' element={<PostPage posts={posts} setPosts={setPosts} />} />
        <Route path='about' element={<About />} />
        <Route path='edit/:id' element={<EditPost posts={posts} setPosts={setPosts}/>} />
        <Route path='add' element={<AddPost posts={posts} setPosts={setPosts}/>} />
        <Route path='*' element={<NoPage />}/>
      </Route>
    </Routes>
  );
}