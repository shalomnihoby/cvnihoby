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
           <h2>Competance</h2>
           <p className='title'> title</p> 
           <Skill title="HTML" rating="7" />
            <Skill title="CSS" rating="6" />
            <Skill title="PYTHON" rating="6" />
            <Skill title="JAVASCRIPT" rating="3" />
            <Skill title="PHP" rating="5" />
           </div>


           <section className="skill">

              <div className='langues'>
                <h2>Langues</h2>
                <p>Francais</p>
                <p>Anglais</p>
                <p>Malagasy </p>
                

              </div>
              </section>
              <Interests  />

            </div>
            </section>
        );
    }
}
