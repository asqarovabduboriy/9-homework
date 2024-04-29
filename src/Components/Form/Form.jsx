import React, { Component } from 'react'
import './Form.css'
export default class Form extends Component {
    render() {
        return (
            <div className='bg_color'>
                <div className='container'>
                    <p>Contact </p>
                    <h2>Food Stalls with Persons but also specialized equipment, Skills to manage.</h2>
                    <form className='form_section'>
                        <input type="text" placeholder='Enter your message'  />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        )
    }
}
