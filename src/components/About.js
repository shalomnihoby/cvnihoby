import React, { Component} from 'react';


export default class About extends Component {
    render() {
        return (
            
            
            <section className="about" id="about">
              
                <div className='user'>
                <h2 > about me</h2>
                    <p className='user_info'> Adresse: Namahora Sud, 119 Morondava</p>
                    <p className='user_info'>Compte e-mail: <a href='mailto:patricnosoavina@gmail.com'> shalomnihoby@gmail.com</a></p>
                    <p className='user_info'>N° telephone: <a href='tel:+126338131839'>0324088821 ou 0340643865</a></p>
                    <p className='user_info'>Date de naissance: 09 juin 2002</p>
                    <p>lieu de naissance: Miarinarivo</p>

                </div>
              
            </section>
        )
    }
}