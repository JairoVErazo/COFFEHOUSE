const NavBar = () => {
  return (
    <nav className="flex justify-between container items-center mt-3">
      <div>
        <img src="/img/LogoCafe.png" width="100px" alt="Logo de la empresa" />
      </div>
      <div className="space-x-5" style={{ color: "#94303c" }}>
        <a href="">HOME</a>
        <a href="">MENU</a>
        <img src="/img/carrito.svg" alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
