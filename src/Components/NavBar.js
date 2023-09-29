
import React from "react";


function NavBar() {
    return (
        <div class="navbar">
    <div class="title">The TSF Bank</div>
    <div class="nav-links">
    <a href="/">Home</a>
      <a href="/customers">Our Customers</a>
      <a href="/customers">Transfer Money</a>
      <a href="/payments">Transactions</a>
      <a href="#">Contact</a>
      <div class="dropdown">
        <a href="#">My Account</a>
        <div class="dropdown-content">
        <a href="/Login">Login</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  </div>
    );
}
export default NavBar;
