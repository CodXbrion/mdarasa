import React from 'react'
import "../../assets/css/testimonials.css"

const Testimony = ({img, name, msg}) => {
    return (
        <>
            <div className="testimony-box-detail">
                <img src={img} alt=""/>
                <h4>{name}</h4>
                <p className="text-center">{msg}</p>
            </div>
        </>
    )
}

export default Testimony
