import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Roomdetail from '../Roomdetail/Roomdetail';

const Room = () => {
    const details = useLoaderData();
    console.log(details)



    return (

        <div className="grid grid-cols-3 flex-grow  card bg-base-300 rounded-box place-items-center w-full">
            {

                details.map(detail => <Roomdetail key={detail.id}

                    detail={detail}

                ></Roomdetail>)
            }

        </div>

    );
};

export default Room;