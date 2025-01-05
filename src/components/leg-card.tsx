'use client';

import Image from 'next/image';
import { poppins, poppinsLight, raleway } from '../utilities/fonts';
import React from 'react';
import { Leg } from '../utilities/api';
import { Flight } from '@mui/icons-material';

const LegCard: React.FC<{ key: number, leg: Leg }> = ({ key, leg }) => {
    return (
        <div className='flex items-center justify-center gap-10'>
            <input type="radio" name="leg" className='w-6 h-6 cursor-pointer' />
            <div key={key} className={`flex flex-col w-[500px] shadow-md rounded-lg overflow-hidden ${poppins.className}`}>
                <header className='flex justify-between items-center px-5 py-4 bg-gray-100'>
                    <div className='flex items-center gap-2'>
                        <Image width={20} src={leg.airline_logo} alt='logo' />
                        <span>{leg.airline_name}</span>
                    </div>
                    <h2 className='text-[#1cb8d8] font-bold'>{leg.id}</h2>
                </header>
                <section className='flex flex-col gap-4 px-6 py-4 bg-white'>
                    <div className='flex gap-2 ms-14'>
                        <span className='text-gray-500'>AIRLINE ID:</span>
                        <span className='text-gray-700'>{leg.airline_id}</span>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center gap-2'>
                            <span>{leg.departure_airport}</span>
                            <div className='flex items-center justify-center gap-2'>
                                <Flight fontSize='large' className='text-gray-500 rotate-90' />
                                <span className={`text-gray-600 ${poppinsLight.className}`}>{leg.departure_time}</span>
                            </div>
                            <div className='flex gap-2 mt-4'>
                                <span className='text-gray-500'>STOPS:</span>
                                <span className='text-gray-700'>{leg.stops}</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <span>{leg.arrival_airport}</span>
                            <div className='flex items-center justify-center gap-2'>
                                <Flight fontSize='large' className='text-gray-500 rotate-90' />
                                <span className={`text-gray-600 ${poppinsLight.className}`}>{leg.arrival_time}</span>
                            </div>
                            <div className='flex gap-2 mt-4'>
                                <span className='text-gray-500'>DURATION MINS:</span>
                                <span className='text-gray-700'>{leg.duration_mins}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LegCard;