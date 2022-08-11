import React, { useState } from 'react';

const Reactcontact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: ""
    });
    const {name, email, phone, address, message} = data;

    const getUserData = (e) => {
        setData({ ...data,[e.target.name]: e.target.value})
    };

    const postData = (e) => {
        e.preventDefault();
        console.log(data)

        
        /*
        fetch(
            "https://netflix-clone-e4dd6-default-rtdb.firebaseio.com/netflix-clone.json",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                    name,
                    email,
                    phone,
                    address,
                    message,
                }),
            }
        );
    };
*/
    }
    return(
            <div>
                <center>
                    <form autoComplete='off' onSubmit={postData}>
                        <input type="text" name="name" value={name} placeholder="Enter your name" onChange={getUserData} /><br />
                        <input type="email" name="email" value={email} placeholder="Enter your email" onChange={getUserData} /><br />
                        <input type="phone" name="phone" value={phone} placeholder="Enter your phone number " onChange={getUserData} /><br />
                        <input type="address" name="address" value={address} placeholder="Enter your address" onChange={getUserData} /><br />
                        <input type="message" name="message" value={message}placeholder="Enter your message" onChange={getUserData} /><br />
                        <input type="submit" name="submit" /><br/>
                    </form>
                </center>
            </div>

/*
        <div>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '100vh'}}>

            <div>
                <form onSubmit={postData}>
                    <span style={{display: 'flex', justifyContent:'center', alignItems:'center'}}><h3>Contact Us</h3></span>
                    <div>
                        <span >Your Name</span>
                        <input
                        
                            type="type"
                            name="name"
                            placeholder='Enter your name'
                            value={name}
                            onChange={getUserData}
                            autoComplete='off'
                            required
                            />
                            <span></span>
                    </div>

                    <div>
                        <span >Email</span>
                        <input 
                        
                            type="email"
                            name="email"
                            value={email}
                            onChange={getUserData}
                            placeholder='Enter Your Email Address' />
    
                    </div>

                    <div>
                        <span >Mobile Number</span>
                        <input
                        
                            type="type"
                            name="phone"
                            placeholder='Enter Your Phone Number'
                            value={phone}
                            onChange={getUserData}
                            autoComplete='off'
                            required
                            />
                    </div>

                    <div>
                        <span >Address</span>
                        <input 
                        
                            type="type"
                            name="address"
                            placeholder='Enter your address'
                            value={address}
                            onChange={getUserData}
                            autoComplete='off'
                            />
                            <span className="focus-input100"></span>
                    </div>

                    <div>
                        <span className="contac-form-title">Message</span>
                        <typearea
                        
                            name="message"
                            placeholder='Your message here....'
                            value={message}
                            onChange={getUserData}
                            ></typearea>
                            
                        <span className="ocus-input100"></span>    
                    </div>

                    <div className="container-contact100-form-btn">
                        <button className="btn btn-primary" >
                            <span>
                                Submit
                                <i
                                    className="fa fa-long-arrow-right m-l-7"
                                    aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>
                <span className="mb=3">
                    for any question contact our 24/7 call center:
                    <span className="contact100-more-highlight">+91 8897515440</span>
                </span>
            </div>
        </div>
       </div>     */
    )
}

export default Reactcontact;