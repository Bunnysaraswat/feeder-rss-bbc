import React, { Component } from 'react'
import me from '../me.JPG'

class Profile extends Component {
    render() {
        return (
        <div className=" sidenav">
            <h2 style={{fontFamily: 'Lobster ,cursive'}}>
                It's Me!!!
            </h2>
            <div>
                <img src={me} className="rounded-profile" width="190" height="190" alt="It's Me!!!"/> 
                <h4 style={{fontFamily: 'Playfair Display'}}>
                    Yash Saraswat
                </h4>
            </div>
            <div className="know-me" style={{fontFamily: 'Playfair Display'}}>
                <h4>
                    Know Me :
                </h4>
                <div>
                <ul className="list-group">
                    <li className="list-group-item"><a href="https://github.com/Bunnysaraswat">Github</a></li>
                    <li className="list-group-item"><a href="https://www.linkedin.com/in/yash-saraswat-401b89156/">LinkedIn</a></li>
                    <li className="list-group-item"><a href="https://www.hackerrank.com/yashsaraswat1">Hackerrank</a></li>
                </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default Profile;