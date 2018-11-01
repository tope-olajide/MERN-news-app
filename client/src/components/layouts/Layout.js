import React, { Component } from 'react';
 
class Layout extends Component {
    render() {
    return (
        <div>
            <div>
            <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
                <h1>MERN-news - Breaking news about Mad Owls</h1>
            </div>
            <div>
                { this.props.children }
            </div>
        </div>
        );
    }
}

export default Layout;