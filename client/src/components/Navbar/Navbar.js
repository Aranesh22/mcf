import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import 'react-bootstrap';
import '../../css/Navbar.css';


class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Somethinf<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i  className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        if(index==2){
                            return(
                                <img src={item.img} href={item.url} alt={item.img} className={item.cName}></img>
                            )
                        }
                        
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            
            </nav>
        )
    }
}

export default Navbar