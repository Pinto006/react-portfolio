export { default as Header } from 'react'

function Header() {
    return (
    <>
<header className="container">
<div className="row">
    <div className="column">
        <h1>Mallorie Pinto</h1>
    </div>
    <div className="row">
        <div className="column left">
            <h2>Full Stack Web Developer</h2>
        </div>
        <nav className="row-sections"><strong>
                <a href="#About Me">About Me</a>
                <a href="#My Projects">My Projects</a>
                <a href="#Contact Me">Contact Me</a></strong>
        </nav>
    </div>
</div>
</header>
</>
    )
}
export default Header;