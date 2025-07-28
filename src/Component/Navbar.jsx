import { Routes, Route, Link } from "react-router";
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Shop from './Shop'
const Navbar = () => {
  return (
    <>
      <nav className="Nav">
        <span>Shapely</span>
        <div className="menu">
          <Link to="/" className="link">Home</Link>
          <Link to="/Blog" className="link">Blog</Link>
          <Link to="/Portfolio" className="link">Portfolio</Link>
          <Link to="/About" className="link">About</Link>
          <Link to="/Contact" className="link">Levels</Link>
          <Link to="/Shop" className="link">Shop</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default Navbar;
