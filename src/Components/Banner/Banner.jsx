import React, { Component } from 'react'
import './Banner.css'
import { FaStar } from 'react-icons/fa'

export default class Banner extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='product_title'>
                        <p className='p_menu'>{this.props.text_h4}</p>
                        <h2>{this.props.text_h2}</h2>
                        <p className='p_text_product'>{this.props.p_text} </p>
                    </div>
                    <div className='product_title'>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <img src={this.props.img} alt="" />
                        </div>
                        <p className='p_text_product'>{this.props.p_text} </p>
                        <div style={{display:'flex',justifyContent:'center', marginTop: 20}}>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
