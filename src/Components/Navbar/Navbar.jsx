import React, { Component } from 'react'
import './Navbar.css'
import img_logo from '../../assets/Imgs/615px-Food_Network_New_Logo 2 (1).png'

export default class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            arr: ['Home', 'About us', 'Menu', 'Features', 'Contact us']
        }
    }
    render() {
        return (
            <>
                <header>
                    <div className='container'>
                        <div className='navbar_flex'>
                            <nav>
                                <ul className='ul_item_navbar'>
                                    <div className='logo'>
                                        <img src={img_logo} alt="Logo" />
                                    </div>

                                    {this.state.arr?.map((el, i) => <li key={i}>{el}</li>)}

                                </ul>
                            </nav>
                            <div className='btn_navbar'><button>Booking Now</button></div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
