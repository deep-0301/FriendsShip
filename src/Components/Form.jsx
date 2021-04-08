import React, { useState } from 'react';
import logo from '../Img/logo.png'
import Display from './Display';
import firebaseDb from '../Firebase'

const Form = () => {

    const [name, setName] = useState('')
    const [friName, setFriName] = useState('')
    const [result, setResult] = useState('loading');
    const [show, setShow] = useState('hide');
    const handleSubmit = () => {
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${name}&sname=${friName}`, {
            "headers": {
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                "x-rapidapi-key": "6562bb095bmsh00dbc4b5518229ap16bb38jsn2cb0fd2988dd"
            }
        })
            .then(data => data.json())
            .then(response => {
                console.log(response);
                setResult(response);
            })
            .catch(err => {
                console.error(err);
            });
        setShow('result-div')
    }

    const SubmitData = () => {
        const FreindsRef = firebaseDb.database().ref('Friends');
        const Friend = {
            name,
            friName
        }
        FreindsRef.push(Friend);
    }

    const SubmitIt = () => {
        handleSubmit()
        SubmitData()
    }

    return (
        <>
            <div className="form-div">
                <form className="calc-form name" >
                    <img
                        className="img"
                        src={logo}
                        alt="Love calculator by name"
                        height='100'
                        title="Love calculator by name" />
                    <h1
                        className="site-heading white pb-2">
                        Friendship Calculator
                    </h1>
                    <div className="row ml-0 mr-0">
                        <div className="col-md-12 col-12 ">
                            <input
                                type="text"
                                className="site-input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                required
                            />

                        </div>
                        <div className="col-md-12 col-12 ">
                            <input
                                type="text"
                                className="site-input"
                                value={friName}
                                onChange={(e) => setFriName(e.target.value)}
                                placeholder="Your Friend's Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-12 pt-4">
                        <input
                            type="button"
                            className="site-submit"
                            value="Calculate"
                            onClick={SubmitIt.bind(this)}
                        /><br />
                    </div>
                    <Display result={result} show={show} />
                </form>
            </div>
        </>
    );
}

export default Form;