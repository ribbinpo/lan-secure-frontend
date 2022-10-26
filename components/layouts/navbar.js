import { Navbar } from "flowbite-react";

const navbar = () => {
  return (
    <Navbar
    fluid={true}
    rounded={true}
    className="shadow-md"
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          LAN-SECURE 
        </span>
      </Navbar.Brand>
      
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/">
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="/about">
          About
        </Navbar.Link>
        <Navbar.Link href="/node">
          Node
        </Navbar.Link>
        <Navbar.Link href="/record">
          Record
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;