import React, { Component } from 'react'
import './Hero.css'
import img from '../../assets/Imgs/CSmJnTefxM 1 (1).jpg'

export default class Hero extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className="flex_hero_section">
                        <div className="hero_text_content">
                            <h1>Making time a good time by making food the good food.</h1>
                            <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                            <div className="hero_btn_wrapper">
                                <button>Order Now</button>
                                <button>Food Details</button>
                            </div>
                        </div>
                        <div className='img_hero_warpper'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
