import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ detail }) => {

    const { category, id } = detail;

    return (
        <div className='mb-4'>
            <Link to={`/detail/${id}`}> <button className="btn btn-outline text-primary w-40 my-0">See {category}</button></Link>
        </ div>

    );
};

export default Sidebar;