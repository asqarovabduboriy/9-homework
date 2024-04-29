import React, { Component } from 'react'
import './Main.css'
import img1 from '../../assets/Imgs/Group 94 (1).png'
import img2 from '../../assets/Imgs/food-delivery (1).png'
import img3 from '../../assets/Imgs/Group 93 (1).png'
export default class Main extends Component {
    constructor() {
        super()

        this.state = {
            data: [
                {
                    id: 1,
                    title: 'Quality Food',
                    discription: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.',
                    img: img1,
                    className: 'main_card main_card_one'
                },
                {
                    id: 2,
                    title: 'Food Delivery',
                    discription: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.',
                    img: img2,
                    className: 'main_card main_card_two'
                },

                {
                    id: 3,
                    title: 'Super Taste',
                    discription: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.',
                    img: img3,
                    className: 'main_card main_card_there'
                },
            ]
        }
    }
    render() {
        return (
            <>
                <div className='container'>
                    <div className="main_card_title">
                        <p>Features</p>
                        <h2>Food with a New Passion</h2>
                    </div>
                    <div className='flex_main_section'>
                      {
                        this.state.data?.map((el)=>(    
                        
                        <div className='main_card' key={el.id}>
                        <div className={el.className}>
                            <img src={el.img} alt="" width={44} height={44} />
                        </div>
                        <h3>{el.title}</h3>
                        <p>{el.discription}</p>
                    </div>
                    ))
                      }
                    </div>
                </div>
            </>
        )
    }
}
