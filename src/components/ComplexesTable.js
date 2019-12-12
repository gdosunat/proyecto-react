import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  complexes: Proptypes.array
};
/**
 This component receives an array of complexes as props and displays them as a table
 */
const ComplexesTable = ({complexes}) => {
    return(
        <>
            <table className='table table-striped table-bordered table-hover table-sm'>
                <thead>
                <tr>
                    <td>#</td>
                    <td>Complex Name</td>
                </tr>
                </thead>
                <tbody>
                {complexes.map(complex => (
                    (
                        <tr key={complex.key}>
                            <td >{complex.complexId}</td>
                            <td>
                                <Link
                                    to={`/questions/${complex.complexId}`}
                                >
                                    {complex.complexName}
                                </Link>
                            </td>
                        </tr>
                    )
                ))}
                </tbody>
            </table>
        </>

    )
};

ComplexesTable.propTypes = propTypes;

export default ComplexesTable;