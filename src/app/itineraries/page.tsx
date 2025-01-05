import ItineraryFilter from "@/src/components/itinerary-filter";
import UserSection from "@/src/components/user-section";
import { poppins } from "@/src/utilities/fonts";

const ItinerariesPage: React.FC = () => {
    return (
        <main className='flex h-screen w-full'>
            <div className='h-full px-14 py-16 w-full overflow-y-scroll'>
                <section className='flex justify-between w-full'>
                    <h1 className={`text-xl ${poppins.className}`}>Welcome,</h1>
                    <UserSection />
                </section>
                <ItineraryFilter />
            </div>
        </main>
    );
}

export default ItinerariesPage;