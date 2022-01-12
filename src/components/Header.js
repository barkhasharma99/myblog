import react from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-dark" style={{ background: "#f23a3a" }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">MY BLOG</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Gallary</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Blog</a>
              </li>

            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>);


}
export default Header;