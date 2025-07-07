
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">CyberZone</div>
            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/games">Games</a>
                <a href="/profile">Profile</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
}