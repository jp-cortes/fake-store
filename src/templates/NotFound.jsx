import React from "react";
import NotFound404 from '@logos/error-not-found.png';
import '@styles/NotFound.module.scss';

const NotFound = () => {
    //tod create  a 404 page
    return(
        <main className="container_error">
            <div className="error_image_container">
                <img className="error_image" src={NotFound404} alt="error 404" />
            </div>
            
        </main>
    )
}

export default NotFound;