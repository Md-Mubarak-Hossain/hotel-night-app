import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../../Sharedfolder/Sidebar/Sidebar';
import Detail from '../Detail/Detail';
import Details from '../Details/Details';


const Home = () => {
    const details = useLoaderData();

    console.log(details)
    return (
        <div>

            <div div className="flex flex-col w-full lg:flex-row" >
                <div className="grid flex-grow card bg-base-300 rounded-box place-items-center w-2/12 flex-col items-start ">content
                    <div className='mt-0 h-1/2'>
                        {
                            details.map(detail => <Sidebar key={detail.id}

                                detail={detail}

                            ></Sidebar>)
                        }
                    </div>
                    <div className="carousel w-full h-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://placeimg.com/800/200/arch" className="w-full h-full" alt='carousel' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://placeimg.com/800/200/arch" className="w-full full" alt='carousel' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>


                <div className="flex-grow  card bg-base-300 rounded-box place-items-center w-10/12">
                    <img src="https://www.acslocks.com/wp-content/uploads/2022/01/1642408320-What-is-Hotel-Reception.jpg" alt="reception" className='w-full' />

                </div>
            </div >
            <div className="grid grid-cols-3 flex-grow  card bg-base-300 rounded-box place-items-center w-full">
                {

                    details.map(detail => <Details key={detail.id}

                        detail={detail}

                    ></Details>)
                }

            </div>
        </div >
    );


};

export default Home;