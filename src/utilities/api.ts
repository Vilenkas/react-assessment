import wizzair from '@/public/logos/wizzair.svg';
import cheapfly from '@/public/logos/cheap-fligths.svg';
import lufthansa from '@/public/logos/lufthansa.svg';
import kiwico from '@/public/logos/kiwicom.svg';
import tripco from '@/public/logos/tripcom.svg';
import britishAirways from '@/public/logos/british-airways.svg';

import Api from '@/api.json';

export type Itinerary = {
    id: string;
    legs: string[];
    price: string;
    agent: string;
    agent_rating: number;
    logo: any;
};

export type Leg = {
    id: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: string;
    stops: number;
    airline_name: string;
    airline_id: string;
    airline_logo: any;
    duration_mins: number;
};

const agent_logos: Map<string, any> = new Map([
    ['Wizzair.com', wizzair],
    ['CheapFligths', cheapfly],
    ['Lufthansa', lufthansa],
    ['Kiwi.com', kiwico],
    ['Trip.com', tripco],
    ['British Airways', britishAirways]
]);

const airline_logos: Map<string, any> = new Map([
    ['Wizz Air', wizzair],
    ['British Airways', britishAirways],
    ['Lufthansa', lufthansa]
]);

export const itineraries: Itinerary[] = Api.itineraries.map((itinerary) => {
    return { 
        ...itinerary,
        price: itinerary.price.substring(1),
        logo: agent_logos.get(itinerary.agent) ?? wizzair
    };
});

export const getLegs = (itineraryId: string): Leg[] => {
    const legs = itineraries.find(itinerary => itinerary.id === itineraryId)?.legs;
    if (!legs) return [];
    return legs.map((legId) => {
        const leg = Api.legs.find(leg => leg.id === legId)!;
        return {
            ...leg,
            airline_logo: airline_logos.get(leg.airline_name) ?? wizzair
        };
    });
}