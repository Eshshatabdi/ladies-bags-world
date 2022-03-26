import React from 'react';

const Qusans = () => {
    return (
        <div className='col-md-12 gy-4'>
            <div className="card">
                <h4>What is the difference between props and state?</h4>
                <p>State make the component interactive for users but props make only non- interactive component.
                    Props just display the incoming data, on the other hand, state is responsible for fetching remote data.
                    State can change the component its owns but props can't change any incoming component. Props are read only from inside the component however state are asynchronous. In Props data can be passed from one component to another in hence in state can only holds information about the components. Props can make component reusable which can not be possible on State.
                </p>

                <h4>How useState works?</h4>
                <p>The useState is a hook that allows us to have state variables in functional components.  In React has two types of component and functional is one of them and class in another. Its a hook of reactjs which elaborate the current situation of the data. By using useStake in React we can compare Virtual dom with Browser dom which elements are changed. However at first we have to import useState from React . Furthermore, useState allows one to declare a state variable inside a function. But only one use of useState can only be used to declare one state variable.
                </p>
            </div>


        </div>
    );
};

export default Qusans;