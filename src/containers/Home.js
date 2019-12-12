import React from 'react';
import {complexesList} from '../constants';
import ComplexesTable from '../components/ComplexesTable';

/**
 This is the container for the Home page. It displays the complexes list
 */
const Home = () => {

    return (
        <>
            <div className="container-fluid">
                <h1>COMPLEXES LIST</h1>
                <ComplexesTable complexes={complexesList}/>
            </div>
        </>
    );
};

export default Home;