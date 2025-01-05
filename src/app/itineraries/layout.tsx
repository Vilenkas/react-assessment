import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import auxo from '@/public/logos/auxo.svg';
import ItineraryButton from '@/src/components/itinerary-button';
import LogoutButton from '@/src/components/logout-button';

export const metadata: Metadata = {
    title: 'Auxo - Dashboard',
    description: 'Auxo Platform',
}

const ItinerariesLayout: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <aside>
                <div className='flex flex-col items-center justify-between px-5 pb-8 w-64 border-e-2 border-e-gray-200 h-screen'>
                    <section className='flex flex-col items-center'>
                        <div className='my-10'>
                            <Link href='/'>
                                <Image width={150} src={auxo} alt='logo' />
                            </Link>
                        </div>
                        <nav>
                            <ItineraryButton />
                        </nav>
                    </section>
                    <section className='flex flex-col items-center pt-5 border-t-2 border-t-green-300'>
                        <LogoutButton />
                    </section>
                </div>
            </aside>
            {children}
        </div>
    );
};

export default ItinerariesLayout;