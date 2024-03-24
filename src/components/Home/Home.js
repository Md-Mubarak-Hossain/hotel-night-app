import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../../Sharedfolder/Sidebar/Sidebar';
import Details from '../Details/Details';


const Home = () => {
    const details = useLoaderData();
    return (
        <div>

            <div div className="flex flex-col w-full lg:flex-row" >                              
                <div className="grid flex-grow  bg-base-300 place-items-center w-full lg:w-3/12 flex-col items-start ">
                    
                    <div className='mt-0 h-full'>
                        {
                            details.map(detail => <Sidebar key={detail.id}
                                detail={detail}></Sidebar>)
                        }
                    </div>
                    
                </div>
            </div >
            <div className="grid grid-cols-1 lg:grid-cols-3 flex-grow  bg-base-300  place-items-center w-full">
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