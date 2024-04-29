import React, { Component } from 'react'
import './Footer.css'
import img_logo from '../../assets/Imgs/615px-Food_Network_New_Logo 2 (1).png'
import { FaInstagram, FaTwitter,FaYoutube,FaFacebook } from 'react-icons/fa'


export default class Footer extends Component {
    constructor() {
        super()
        this.state = {
            data_one: ["Landingpage", "Documentation", "Referral Program", "UI & UX Design", "Web Design"],
        }
    }
    render() {
        return (
            <>
                <footer>
                    <div className="container">
                        <div className='flex_elemnt_footer'>
                            <div>
                                <img src={img_logo} alt="" />
                                <div className='text_content_one'>
                                    <p>www.company name.com</p>
                                    <p>companyname@gmail.com</p>
                                    <p>Phone: +7 485-118-03-25</p>
                                </div>
                            </div>



                            <div className='text_content_two'>
                                <h3>Home</h3>
                                {
                                    this.state.data_one?.map((el, i) => <p key={i}> {el}</p>)
                                }
                            </div>

                            <div className='text_content_two'>
                                <h3>Menu</h3>
                                {
                                    this.state.data_one?.map((el, i) => <p key={i}> {el}</p>)
                                }
                            </div>

                            <div className='text_content_two'>
                                <h3>Company</h3>
                                {
                                    this.state.data_one?.slice(0,3).map((el, i) => <p key={i}> {el}</p>)
                                }

                                <div className='icon_container'>
                                             <FaFacebook style={{color:'#3D68DD'}}/>
                                             <FaYoutube  style={{color: 'red'}}  />
                                             <FaTwitter  style={{color: 'blue'}} />
                                              <FaInstagram style={{color: '#E1306C'}} />
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
