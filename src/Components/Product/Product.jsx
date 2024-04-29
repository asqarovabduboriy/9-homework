import React, { Component } from 'react'
import './Product.css'
import { FaStar, FaPlus } from 'react-icons/fa'
import img from '../../assets/Imgs/CSmJnTefxM 1 (1).jpg'
import axios from '../Api/api'

export default class Product extends Component {
    constructor() {
        super()
        this.state = {
            data: null
        }
        console.log(this.state.data);
    }

    componentDidMount() {
        axios
            .get('/products')
            .then(res => this.setState({ data: res.data.products }))
            .catch(res => console.log(res))
    }
    render() {
        return (
            <>
                <div className='container'>
                    <div className='product_title'>
                        <p className='p_menu'>Menu</p>
                        <h2>Food Full of treaty Love</h2>
                        <p className='p_text_product'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
                    </div>

                    <div className='prduct_flex'>
                        {
                            this.state.data?.slice(0, 6).map((el) =>
                                <div key={el.id} className='product_card' >
                                    <div>
                                        <img src={el.images[0]} alt={el.title} />
                                    </div>
                                    <div className='card_text_content'>
                                        <div className='price_wraper'>
                                            <h3>{el.title}</h3>
                                            <b>{el.price}$</b>
                                        </div>
                                        <p title={el.description}>{el.description}</p>
                                        <div className='stars'>
                                            <button><FaPlus /></button>
                                            <div>
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                    <div className='learn_more'>
                        <button>Learn More</button>
                    </div>
                </div>
            </>
        )
    }
}
