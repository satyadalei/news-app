import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class NavBar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark" >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-4"><Link to="/" className="nav-link active" aria-current="page" >Home</Link></li>
                                <li className="nav-item"><Link to="/business" className="nav-link" >Business</Link></li>
                                <li className="nav-item"><Link to="/entertainment" className="nav-link" >Entertainment</Link></li>
                                <li className="nav-item"><Link to="/health" className="nav-link" >Health</Link></li>
                                <li className="nav-item"><Link to="/science" className="nav-link" >Science</Link></li>
                                <li className="nav-item"><Link to="/sports" className="nav-link" >Sports</Link></li>
                                <li className="nav-item"><Link to="/technology" className="nav-link" >Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar