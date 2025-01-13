import NavLink from "./NavLink";

function Navbar() {
    const navLinks = [
        { title: "Hair" },
        { title: "Skin" },
        { title: "Bath" },
        { title: "Scent" },
        { title: "Story" },
    ];

    return ( 
        <nav className="flex items-center gap-4">
            {navLinks.map((link, index) => (
                <NavLink href={"/collections/" + link.title.charAt(0).toLowerCase() + link.title.slice(1)} title={link.title} key={index} className="nav-link" />
            ))}
        </nav>
     );
}

export default Navbar;