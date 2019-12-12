import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Link} from "react-router-dom";
import AddQuestionForm from "../components/AddQuestionForm";
import {ToastContainer} from "react-toastify";
import styles from './Questions.css'

const propTypes = {
    match: PropTypes.object
};

/**
 This is the questions container. The url to access to it is /questions/{complexId}
 */
const Questions = ({match}) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get(`http://stg-aptmcs1.internetbrands.com:8080/services/qa/v1/getAllByComplex?complexId=${match.params.complexId}`)
            .then(response => {
                setQuestions(response.data.qaDataList);
            })
    }, [match]);

    const requestQuestionsByComplex = (complexId) => {
        axios.get(`http://stg-aptmcs1.internetbrands.com:8080/services/qa/v1/getAllByComplex?complexId=${complexId}`)
            .then(response => {
                setQuestions(response.data.qaDataList);
            })
    };

    return(
        <>
            <ToastContainer className={styles.toastContainer}/>
            <Link to={'/'}><button className='btn btn-primary mt-2'>Go back</button></Link>
            <AddQuestionForm complexId={match.params.complexId} requestQuestions={requestQuestionsByComplex}/>
            <br/>
            <br/>
            <h3>QUESTIONS LIST</h3>
            <table className='table table-striped table-bordered table-hover table-sm'>
                <thead>
                <tr>
                    <td>Question</td>
                    <td>Date</td>
                    <td>Username</td>
                </tr>
                </thead>
                <tbody>
                {questions.map(question => (
                    (
                        <tr key={question.qa.id}>
                            <td>{question.qa.qaText}</td>
                            <td>{question.dateCreatedFormatted}</td>
                            {question.qa.isAnonymous ?
                                (
                                    <td>Anonymous</td>
                                ) :
                                <td>{question.qa.user.username}</td>
                            }
                        </tr>
                    )
                ))}
                </tbody>
            </table>
        </>
    )
};

Questions.propTypes = propTypes;
export default Questions;