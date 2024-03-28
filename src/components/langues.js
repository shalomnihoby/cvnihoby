import React, {Component} from 'react';
import Skill from './skill';
import './skills.css';
import Interests from './interests';
export default class Skills extends Component {
    render() {
        return (
            <section className="skill">

            <div className="skills">
                
                <div>
                <h2>Langues</h2>
            <Skill title="Malagasy" rating="6" />
            <Skill title="Francais" rating="3" />
            <Skill title="Anglais" rating="5" />
                </div>
                </section>
        );
    }
}      