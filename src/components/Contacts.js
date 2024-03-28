import React, {Component} from 'react';
export default class Contacts extends Component {
    render() {
        return (
            <section className="contacts" id="contacts">
                <div className="green-line">
                    <h2>Contacts:</h2>
                    <ul className="contacts-list">
                       
                        <li> email: shalomnihoby@gmail.com|</li>
                        <li>github: shalomnihoby	|</li>
                        <li>tel: 032 40 888 21	|</li>
                    </ul>
                </div>
            </section>
        )
    }
}