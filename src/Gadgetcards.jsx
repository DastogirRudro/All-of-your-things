import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './card';

const Gadgetcards = () => {
    const { category } = useParams()
    const data = useLoaderData()
    const [gadget, setgadget] = useState([])

    useEffect(() => {

        if (category) {
            const filterbycategory = [...data].filter(gadget => gadget.category == category)
            setgadget(filterbycategory)
        } else {
            setgadget(data)
        }

    }, [category, data])


    
    return (
        <div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
                {
                    gadget.map(gadget => <Card gadget={gadget} key={gadget.id}></Card>)
                }
            </div>
        </div>
    );
};

export default Gadgetcards;