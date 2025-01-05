import { poppins } from '@/src/utilities/fonts';
import ItineraryControl from '@/src/components/itinerary-control';
import { itineraries } from '@/src/utilities/api';
import React from 'react';
import UserSection from '@/src/components/user-section';

const ItinerariesPage: React.FC = () => {
    return (
        <main className='flex h-screen w-full'>
            <div className='h-full px-14 py-16 w-full overflow-y-scroll'>
                <section className='flex justify-between w-full'>
                    <h1 className={`text-xl ${poppins.className}`}>Welcome,</h1>
                    <UserSection />
                </section>
                <ItineraryControl itineraries={itineraries} />
            </div>
        </main>
    );
}

export default ItinerariesPage;