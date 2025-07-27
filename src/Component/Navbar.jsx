import { Routes, Route, Link } from "react-router";
import Home from './Home'
const Navbar = () => {
  return (
    <>
      <nav className="Nav">
        <span>Shapely</span>
        <div className="menu">
          <Link to="/" className="link"><a>Home</a></Link>
          <Link to="/Blog" className="link"><a >Blog</a></Link>
          <Link to="/Portfolio" className="link"><a >Portfolio</a></Link>
          <Link to="/About" className="link"><a >About</a></Link>
          <Link to="/Contact" className="link"><a >Levels</a></Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Navbar;

const Blog = () => {
  return "This is Blog";
};

const Portfolio = () => {
  return "This is Portfolio";
};

const About = () => {
  return "This is About";
};
const Contact = () => {
  return "This is Contact";
};
