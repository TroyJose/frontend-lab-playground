import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet } from 'react-router';

import "./App.css";

interface Posts {
  [key: string]: {
    title: string;
    description: string;
  };
}

const BlogPosts: Posts = {
  "first-blog-post": {
    title: "First Blog Post",
    description: "Lorem ipsum dolor sit amet, consectetur adip.",
  },

  "second-blog-post": {
    title: "Second Blog Post",
    description: "Hello React Router v6",
  },
};

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}

function PostLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <h3>{title}</h3>
        </li>
      ))}
    </ul>
  );
}

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
          <nav style={{ margin: 10 }}>
      <NavLink
        to='/'
        style={({ isActive }) => ({
          padding: 5,
          ...(isActive ? { color: "red" } : {}),
        })}
      >
        Home
      </NavLink>
      <NavLink
        to='/posts'
        style={({ isActive }) => ({
          padding: 5,
          ...(isActive ? { color: "red" } : {}),
        })}
      >
        Posts
      </NavLink>
      <NavLink
        to='/about'
        style={({ isActive }) => ({
          padding: 5,
          ...(isActive ? { color: "red" } : {}),
        })}
      >
        About
      </NavLink>
    </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
