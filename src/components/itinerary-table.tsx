'use client';

import Image from 'next/image';
import Link from 'next/link';
import { poppinsLight } from '../utilities/fonts';
import { Itinerary } from '../utilities/api';

const ItineraryTable: React.FC<{ itineraries: Itinerary[] }> = ({ itineraries }) => {
    return (
        <div className='flex flex-col gap-2 mt-20'>
            <div className={`grid grid-cols-5 px-8 py-3 text-gray-500 bg-gray-50 rounded ${poppinsLight.className}`}>
                <div className='text-start'>Itinerary</div>
                <div className='text-start'>Price</div>
                <div className='text-start col-start-3 col-end-5'>Agent</div>
                <div className='text-start'>Agent rating</div>
            </div>
            {itineraries.map((item, index) => (
                <Link href={`/itineraries/${item.id}`} key={index}>
                    <div className={`grid grid-cols-5 px-8 py-4 rounded hover:text-[#3f725a] hover:bg-[#ccffe7] hover:border-[#3f725a] border-2 cursor-pointer shadow ${poppinsLight.className}`}>
                        <div className={`text-start ${poppinsLight.className}`}>{item.id}</div>
                        <div className={`text-start ${poppinsLight.className}`}>£{item.price}</div>
                        <div className={`text-start flex items-center justify-start gap-4 col-start-3 col-end-5 ${poppinsLight.className}`}>
                            <Image width={20} src={item.logo} alt='logo' />
                            <span>{item.agent}</span>
                        </div>
                        <div className={`text-start ${poppinsLight.className}`}>{item.agent_rating}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ItineraryTable;