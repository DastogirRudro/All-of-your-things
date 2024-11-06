import React from 'react';
import { NavLink } from 'react-router-dom';

const Heading = ({categories}) => {
    return (
        <div>
            <div role="tablist" className="tabs bg-white rounded-xl pl-6 p-4 flex flex-col content-start items-center justify-between gap-8 mx-4 tabs-lifted">

                   {
                    categories.map(category => <button className='btn tab-active rounded-2xl font-bold shadow-lg'><NavLink to= {`/categories/${category.category}`} role="tab" className="tab">{category.category}</NavLink></button> )
                   }
                
                </div>
        </div>
    );
};

export default Heading;