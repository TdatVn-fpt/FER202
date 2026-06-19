function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#exercise-6">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#exercise-6">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#exercise-7">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#exercise-8"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#exercise-6">Exercise 6</a></li>
                <li><a className="dropdown-item" href="#exercise-7">Exercise 7</a></li>
                <li><a className="dropdown-item" href="#exercise-8">Exercise 8</a></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary btn-sm" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
