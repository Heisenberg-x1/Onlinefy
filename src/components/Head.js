import React from "react";
import "../Style/head.css";
import logo from "../logo.png";
function Head() {
  const style = {
    width: "100%",
    height: "auto",
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="logo">
            <img src={logo} style={style} alt="" />
          </div>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  New in
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Men
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Shirts
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Pants
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Shoes
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Hoodies
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Women
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Dresses
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Tops
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Bottoms
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Shoes
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Accessories
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  // aria-haspopup="true"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For Kids
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Boys
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Girls
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Baby
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Head;
