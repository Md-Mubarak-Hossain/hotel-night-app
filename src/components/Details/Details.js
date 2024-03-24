import React from 'react';
import { Link } from 'react-router-dom';


const Details = ({ detail }) => {
    const { Quality, id, bad, person, picture, balance
    } = detail;
    return (
        <div className='p-2'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={picture} alt="Shoes" className="rounded-xl h-72" />
                </figure>
                <div className="grid grid-cols-2 card-body items-center text-center">
                    <h2>Total Bad:{bad}</h2>
                    <h2>Person:{person}</h2>
                    <h2>Quality:{Quality}</h2>
                    <h2>balance:{balance}</h2>
                    <div className="card-actions w-full ">
                        <Link to={`/detail/${id}`}> <button className="btn btn-outline  w-72 ">See Details</button></Link>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Details;