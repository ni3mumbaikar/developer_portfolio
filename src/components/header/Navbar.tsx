import './Navbar.css'


function Navbar() {
  return (
    <div className="nav-root flex">
      <div className="maintitle navigation-bar hidden md:flex flex-row gap-3 pt-4 pb-4 pl-8 justify-content-start">
        <strong className="text-blue-500">Nitin Kale</strong>
      </div>
      <nav className="navigation-bar hidden md:flex flex-row gap-4 pt-4 pb-4 pr-8 ml-auto">
        <div className="nav-item hover:text-blue-500">Home</div>
        <div className="nav-item hover:text-blue-500">Projects</div>
        <div className="nav-item hover:text-blue-500">Contact</div>
        <div className="nav-item hover:text-blue-500">Download CV</div>
      </nav>
      <div className="flex flex-row mt-4 pb-4 pr-4 pl-4 md:hidden justify-content-end">
        <i className="pi pi-bars" style={{ fontSize: '2rem' }}></i>
      </div>
    </div>
  );
}

export default Navbar;
