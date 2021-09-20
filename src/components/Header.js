const Header = () => {
  const x = '1'
  return (
    <>
      <ul className="nav nav-tabs d-flex justify-content-between p-2">
  <li className="nav-item">
    <h1>PutiHalloween</h1>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
</ul>
    </>
  )
};

export default Header