import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});


function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation with NavLink for active styling */}
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
        <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App

// import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// function Info() {
//   const { firstname } = useParams();
//   return <h1>Hello, {firstname}!</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/customer/Emil">Emil</Link> | 
//         <Link to="/customer/Tobias">Tobias</Link> |
//         <Link to="/customer/Linus">Linus</Link>
//       </nav>

//       <Routes>
//         <Route path="/customer/:firstname" element={<Info />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


// export default App
