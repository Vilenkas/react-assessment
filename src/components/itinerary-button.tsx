'use client'

import Link from 'next/link';
import { ConnectingAirports } from '@mui/icons-material';

const ItineraryButton: React.FC = () => {
    return (
        <Link href='/itineraries' className={`block bg-[#DDF0F2] hover:bg-[#bce1e5] text-[#2ACBD8] hover:text-[#1ab2c0] text-center py-2 px-4 rounded w-48 shadow-md`}>
            <span className='me-2'><ConnectingAirports fontSize='small'/></span>
            <span>Itineraries</span>
        </Link>
    );
}

export default ItineraryButton;