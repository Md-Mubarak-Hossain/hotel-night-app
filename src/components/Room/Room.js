import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Roomdetail from '../Roomdetail/Roomdetail';

const Room = () => {
    const details = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 flex-grow  md:bg-base-300 rounded-box place-items-center w-full">
            {

                details.map(detail => <Roomdetail key={detail.id}

                    detail={detail}

                ></Roomdetail>)
            }

        </div>

    );
};

export default Room;