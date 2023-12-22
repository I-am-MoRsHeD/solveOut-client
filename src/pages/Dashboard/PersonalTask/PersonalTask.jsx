// eslint-disable-next-line no-unused-vars
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useTask from '../../../hooks/useTask';

const PersonalTask = () => {
    const {user} = useAuth();
    const [tasks] = useTask();

    return (
        <div>
            <h2 className="text-4xl font-bold text-yellow-500 w-52 mx-auto pt-10 pb-5 border-b border-black">~ All Task ~</h2>
            <div className='mt-10'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-96 h-96' src={user?.photoURL} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {user?.displayName}</h2>
                        <p>Task Added: {tasks.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalTask;