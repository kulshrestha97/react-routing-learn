import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Books from "./Books";
import Book from "./Book";
import NewBook from "./NewBook";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Books"}>Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/Books">
          <Route index element={<Books/>}/>
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
