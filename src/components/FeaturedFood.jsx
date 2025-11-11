import React, { useEffect, useState } from 'react';
import useAxiosIns from '../hooks/useAxiosIns';
import FeatureFItem from './FeatureFItem';
import { Link } from 'react-router-dom';

const FeaturedFood = () => {
    const axiosInstance = useAxiosIns();
    const [fFoods,setFFoods] = useState([]);
    useEffect(() => {
        axiosInstance('/featuredFoods')
        .then(data => setFFoods(data.data))
    },[])
    return (
        <div>
            <div className='c-container'>
                <h2 className='text-center text-5xl mb-8 pt-20'> Featured Foods </h2>
                <p className='max-w-[700px] w-full m-auto text-center mb-5'>Discover freshly prepared meals shared by generous donors in your
                community. Grab your favorite dishes before they’re gone!</p>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                    {
                        fFoods.map(fFoodItem => < FeatureFItem fFoodItem ={fFoodItem} />)
                    }
                </div>
                <div className='flex justify-center pt-15'>
                        <Link to={`/plants`} className="cursor-pointer bg-green-900 hover:bg-green-600 text-white font-semibold py-3 px-14 rounded-sm transition duration-300 ease-in-out  ">
                            <span>Show All</span>
                        </Link>
                </div>

                
            </div>
        </div>
    );
};

export default FeaturedFood;