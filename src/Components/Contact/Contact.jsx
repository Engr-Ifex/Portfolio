import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import { PiFacebookLogoBold } from 'react-icons/pi'
import StarsCanvas from '../Stars/Stars'
import './Contact.css'


function Contact(){
    
    return(
        <div id='contacthero'>
            <div id='contacttext'>
                <p>Get in Touch</p>
                <h1>Contact Me</h1>
            </div>
            <div id='contactcont'>
                    <div>
                        <div id='smallcards'>
                            <FaWhatsapp size={20}/>
                            <p>Whatsapp/Phone</p>
                           <p>+2347058150347</p>
                           <a href="https:/wa.link/ejopzt" target='_blank' rel="noreferrer" required>Send a message</a>
                        </div>

                        <div id='smallcards'>
                        <BiLogoGmail size={20}/>
                        <p>Email</p>
                       <p>Ayobamiadesoji2@gmail.com</p> 
                       <a href="mailto:Ayobamiadesoji2@gmail.com" target='_blank' rel="noreferrer" required>Send a message</a>
                        </div>

                        <div id='smallcards'>
                        <PiFacebookLogoBold size={25}/>
                        <p>Facebook</p>
                       <p>Ayobamiade</p> 
                       <a href="https://www.facebook.com/ifex.adesoji" target='_blank' rel="noreferrer" required>Send a message</a>
                        </div>
                    </div>
                    <form  id='contactcard' action="https://formsubmit.co/ayobamiadesoji2@gmail.com" method="POST">
                        <label htmlFor="Your Name">Your Name</label>
                        <input type='text' id='input1' placeholder="What's your good name" name='Name'/>
                        <label htmlFor="Your Email">Your Email</label>
                        <input type="email" id='input1'  placeholder="What's your web address" name='Email'/>
                        <label htmlFor="Your Message">Your Message</label>
                        <textarea id='input2'  placeholder="Type your message here" name='Message'/>
                        <input type="submit" id='contactsubmit' value='Send' />
                    </form>
            </div>
            <StarsCanvas/>
        </div>
    )
}

export default Contact;