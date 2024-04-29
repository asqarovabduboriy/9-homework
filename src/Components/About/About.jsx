import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <div className='container'>
                    <div className="flex_hero_section" style={{marginTop: 108, gap:97}}>
                    <div className='img_hero_warpper'>
                            <img src={this.props.img} alt="" />
                        </div>
                        <div className="hero_text_content">
                            <h1>{this.props.text_title}</h1>
                            <p>{this.props.text_description}</p>
                            <div className="hero_btn_wrapper">
                                <button>{this.props.btn}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
