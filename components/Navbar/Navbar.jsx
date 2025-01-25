import NavLink from "./NavLink";

function Navbar() {
    const navLinks = [
        // { title: "Hair" },
        // { title: "Skin" },
        // { title: "Bath" },
        // { title: "Scent" },
        // { title: "Story" },
        { title: "Shop", href: '/collections/' },
        { title: "About", href: '/about' },
        { title: "Contact", href: 'contact' },
    ];

    return ( 
        <nav className="items-center gap-4 hidden md:flex">
            {navLinks.map((link, index) => (
                <NavLink href={link.href.toLowerCase()} title={link.title} key={index} className="nav-link" />
            ))}
        </nav>
     );
}

export default Navbar;