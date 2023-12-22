// eslint-disable-next-line no-unused-vars
import React from 'react';

const Professionals = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className="text-4xl font-bold text-yellow-500 w-80 mb-10 mx-auto pt-10 pb-5 border-b border-black">~ Who can use? ~</h2>
            {/* developers */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='w-96' src="https://i.ibb.co/3d9QGcp/partTime.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Developers</h2>
                    <ul className='list-decimal ml-5'>
                        <li>They can post their further task that they need to do.</li>
                        <li>Pressure of works,sometimes they forget to do some of the important task.This website will help them reminder their task.</li>
                        <li>After finishing,they can drag their work on Completed list</li>
                        <li>If one task is ongoing,they can drag this to Ongoing list</li>
                    </ul>
                </div>
            </div>
            {/* Students */}
            <div className="card flex flex-row-reverse my-10 card-side bg-base-100 shadow-xl">
                <figure><img className='w-96' src="https://i.ibb.co/NrhRkqN/profile2.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Students</h2>
                    <ul className='list-decimal ml-5'>
                        <li>They can post their further task that they need to do.</li>
                        <li>Pressure of works,sometimes they forget to do some of the important task.This website will help them reminder their task.</li>
                        <li>After finishing,they can drag their work on Completed list</li>
                        <li>If one task is ongoing,they can drag this to Ongoing list</li>
                    </ul>
                </div>
            </div>
            {/* Bankers */}
            <div className="card my-10 card-side bg-base-100 shadow-xl">
                <figure><img className='w-96' src="https://i.ibb.co/1MLRp4F/banner2.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Bankers</h2>
                    <ul className='list-decimal ml-5'>
                        <li>They can post their further task that they need to do.</li>
                        <li>Pressure of works,sometimes they forget to do some of the important task.This website will help them reminder their task.</li>
                        <li>After finishing,they can drag their work on Completed list</li>
                        <li>If one task is ongoing,they can drag this to Ongoing list</li>
                    </ul>
                </div>
            </div>
            {/* Professionals */}
            <div className="card flex flex-row-reverse my-10 card-side bg-base-100 shadow-xl">
                <figure><img className='w-96' src="https://i.ibb.co/D5pZdVx/hybrid.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Professionals</h2>
                    <ul className='list-decimal ml-5'>
                        <li>They can post their further task that they need to do.</li>
                        <li>Pressure of works,sometimes they forget to do some of the important task.This website will help them reminder their task.</li>
                        <li>After finishing,they can drag their work on Completed list</li>
                        <li>If one task is ongoing,they can drag this to Ongoing list</li>
                    </ul>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Professionals;