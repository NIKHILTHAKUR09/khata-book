import React from 'react'

const Navbar = () => {
  return (
    <>
     {/* <nav className="navbar bg-dark ">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1 text-light">Khata Book</span>
  </div>
</nav> */}
<nav class="navbar bg-body-tertiary alin-item-center  shadow my-2">
  <div class="container-fluid ">
    <a class="navbar-brand d-flex alin-item-center " href="#">
      {/* <img src="./assets/khatabook logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/> */}
      <img src="src/assets/khatabook logo.png" alt="Logo" width="30" height="30"  class="d-inline-block align-text-top" />
      Khata-Book
    </a>
  </div>
</nav>
    </>
  )
}

export default Navbar