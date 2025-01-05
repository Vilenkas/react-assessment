'use client';

import { useState, useMemo } from 'react';
import { Itinerary } from '../utilities/api';
import { poppinsLight } from '../utilities/fonts';
import ItineraryTable from './itinerary-table';
import ItineraryFilter from './itinerary-filter';

export type FilterOption = 'popular' | 'price' | 'rating';

const ItineraryControl: React.FC<{ itineraries: Itinerary[] }> = ({ itineraries }) => {
    const [search, setSearch] = useState('');
    const [activeFilter, setActiveFilter] = useState<FilterOption>('popular');

    const filteredItineraries = useMemo(() => {
        let filtered = [...itineraries];

        if (search) {
            const pattern = search.toLowerCase();
            filtered = filtered.filter(item => item.id.toLowerCase().includes(pattern) || item.agent.toLowerCase().includes(pattern));
        }

        switch (activeFilter) {
            case 'price':
                filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                break;
            case 'rating':
                filtered.sort((a, b) => b.agent_rating - a.agent_rating);
                break;
        }

        return filtered;
    }, [itineraries, search, activeFilter]);

    return (
        <>
            <section className='mt-8'>
                <ItineraryFilter 
                    search={search} 
                    setSearch={setSearch}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
                <h2 className={`text-sm mt-6 ${poppinsLight.className}`}>
                    Select the itinerary from the list below
                </h2>
            </section>
            <section className='mt-16'>
                <ItineraryTable itineraries={filteredItineraries} />
            </section>
        </>
    );
}

export default ItineraryControl;