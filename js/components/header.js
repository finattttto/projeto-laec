export const headerComponent = 
`<nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="img\icon2.png"
                height="40"
                alt="Logo"
                loading="lazy"
              />
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-1">
              <li class="nav-item">
                <a class="nav-link" href="#">Livros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mangás</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Promoções</a>
              </li>
            </ul>
          </div>
          <div class="container-fluid col-8 col-sm-6 col-md-5 col-lg-3">
            <form class="d-flex input-group">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Busque seu mangá aqui"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </form>
          </div>
          <div class="d-flex align-items-center">
            <a class="link-secondary me-3" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">Perfil</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Configurações</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Sair</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
`;