import React  from 'react';



function Skill({title, rating}) {
        return (
            <section className="skill">
                
            <p className='title'>{title}</p>
            <div className='skill_rating'>
                <div className='circle circle-plain'></div>
                <div className='circle circle-plain'></div>
                <div className='circle circle-plain'></div>
                <div className='circle circle-plain'></div>
            </div>

 
        </section>

        );
    };

export default Skill;
