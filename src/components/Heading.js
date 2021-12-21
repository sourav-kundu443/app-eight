import React from "react";


const Heading = ({heading, class_name}) =>{
    return (
        <>
            <h2 className={class_name}>{heading}</h2>
        </>
    )
}

export default Heading;