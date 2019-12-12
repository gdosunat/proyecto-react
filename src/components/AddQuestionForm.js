import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';

const propTypes = {
  complexId : PropTypes.number,
  requestQuestiones: PropTypes.func
};

/**
 This component receives two props: complexId and requestQuestions. And displays a form to let the user add a new question
 */

const AddQuestionForm = ({complexId, requestQuestions}) => {

    const [question, setQuestion] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    const submitQuestion = event => {
        event.preventDefault();
        /**
          We validate that the question is longer than 25 characters. If validateForm returns true, then we submit the question. If not
          we show an error message
        */
        if(validateForm()) {
            const service = 'http://localhost:8000/api/qa/addQuestion';
            axios.post(service, {
                anonymous: isAnonymous,
                complexId: complexId,
                qaText: question,
                userId: 52
            }).then(response => {
                toast('SUCCESS ADDING THE QUESTION', {
                    type: toast.TYPE.SUCCESS
                });
                requestQuestions(complexId);
            }).catch(error => {
                toast('THERE WAS AN ERROR ADDING THE QUESTION. PLEASE TRY AGAIN LATER', {
                    type: toast.TYPE.ERROR
                })
            })
        }
    };

    const validateForm = () => {
        /**
          We trim the question string to make sure we dont have only spaces on the question and then validate that the question is longer than
         25 characters.
         */
        if(question.trim().length <= 0 || question.trim().length < 25) {
            toast('Your question must be longer than 25 characters', {
                type: toast.TYPE.ERROR
            });
            return false;
        } else return true
    };

    return(
        <>
            <h1>Add a question</h1>
            <form onSubmit={submitQuestion}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Type in your question" value={question} onChange={e => setQuestion(e.target.value)}/>
                </div>
                <div className="form-group float-right mr-3">
                    <input type="checkbox" className='mr-2' value={isAnonymous} onChange={e => setIsAnonymous(e.target.checked)}/>
                    <span>Publish as Anonymous</span>
                </div>
                <button className="btn btn-primary" type='submit' >Submit question</button>
            </form>
        </>
    )
};

AddQuestionForm.propTypes = propTypes;

export default AddQuestionForm;