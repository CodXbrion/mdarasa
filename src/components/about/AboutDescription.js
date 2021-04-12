import React from 'react'

const AboutDescription = ({title, desc}) => {
    return (
        <>
            <article className="article-desc">
              <h4 className="text-center">{title}</h4>
              <p className="text-center">{desc}</p>
            </article>  
        </>
    )
}

export default AboutDescription
