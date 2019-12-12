import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

/**
 This is the 404 page, in case we don't have a route defined for the url the user has provided, they see this page
 */
const NotFound = () => (
    <div className='container-fluid'>
        <div className="row alert alert-danger" role="alert">
            <FontAwesomeIcon icon={faExclamationTriangle} className='mr-2'/>
            <span>404! PAGE NOT FOUND</span>
        </div>
    </div>
);

export default NotFound;