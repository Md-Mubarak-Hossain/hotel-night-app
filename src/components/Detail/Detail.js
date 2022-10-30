import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Detail = () => {

    const detail = useLoaderData();
    const { Quality, id, bad, person, picture, category, phone, food, room, about, address, balance
    } = detail;
    console.log(detail)



    return (

        <div className="card w-screen bg-base-100 shadow-xl image-full">
            <figure><img src={picture} alt="Shoes" className='w-screen' /></figure>

            <div className="card-body items-center content-center">
                <h2 className='card-title text-warning font-extrabold text-5xl uppercase'>Details your <div className="w-14 rounded-full"><img className="w-14 rounded-full" src={picture} alt="room" /></div>{category}</h2>
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2>Room no:{id}</h2>
                        <h2>Total Bad:{bad}</h2>
                        <h2>Person:{person}</h2>
                        <h2>Quality:{Quality}</h2>
                        <h2>category:{category}</h2>

                    </div>
                </div>
                <Link className=" w-full " to={`/book/${id}`}><button className="btn btn-outline text-primary w-full">Book Now</button></Link>

                <div className='grid grid-cols-2 w-full'>
                    <div className='p-3'>
                        <div className="card w-full bg-warning shadow-xl h-full">

                            <figure className="px-10 pt-10">
                                <img src="https://ichef.bbci.co.uk/images/ic/832xn/p0d6r2n7.jpg" className="rounded-xl w-96" alt='food' />
                            </figure>
                            <div className="card-body items-center text-center text-black">
                                <h2 className="card-title">Food Menu</h2>
                                <div className='grid grid-cols-2 w-1/2'>
                                    {
                                        food.map(f => <li className='text-start '>{f}</li>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>

                        <div className="card w-full bg-warning shadow-xl h-full text-black">
                            <figure className="px-10 pt-10">
                                < img src={picture} alt="room" className="rounded-xl w-96" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2>Room Facilities</h2>


                                <div className='grid grid-cols-2 '>
                                    {

                                        room.map(r => <li className='text-start'>{r}</li>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-primary text-primary-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Information</h2>
                        <h2>balance:{balance}</h2>
                        <h2>address:{address}</h2>
                        <h2>phone:{phone}</h2>
                        <p>{about}</p>
                    </div>
                </div>
                <div className="card-actions justify-end w-full">
                    <Link className="w-full" to={`/book/${id}`}><button className=" btn btn-outline w-full text-primary-focus">Book Now</button></Link>
                </div>
            </div >
        </div >

    );
};

export default Detail;