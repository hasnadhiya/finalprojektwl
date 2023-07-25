import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./component/menu";
import Login from "./component/login";
import Register from "./component/register";

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ backgroundColor: "LightGreen", padding: "1rem" }}>
          <ul style={{ display: "flex", listStyle: "none", justifyContent: "center" }}>
            <li style={{ marginRight: "1rem" }}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>Mahasiswa</Link>
            </li>
            <li style={{ marginRight: "1rem" }}>
              <Link to="/login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
            </li>
            <li>
              <Link to="/register" style={{ textDecoration: "none", color: "black" }}>Register</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
