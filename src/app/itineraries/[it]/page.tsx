import Link from "next/link";
import UserSection from "@/src/components/user-section";
import { getLegs, Leg } from "@/src/utilities/api";
import { poppins } from "@/src/utilities/fonts";
import { ArrowBack } from "@mui/icons-material";
import LegCard from "@/src/components/leg-card";

const LegsPage: React.FC<{ params: { it: string } }> = ({ params }) => {

    const legs: Leg[] = getLegs(params.it);

    return (
        <main className='flex h-screen w-full'>
            <div className='h-full px-14 py-16 w-full overflow-y-scroll'>
                <section className='flex justify-between w-full'>
                    <section className="flex items-center gap-4">
                        <Link href='/itineraries' className="rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">
                            <ArrowBack />
                        </Link>
                        <h1 className={`text-xl ${poppins.className}`}>{params.it}</h1>
                    </section>
                    <UserSection />
                </section>
                <form action="/itineraries" method="get">
                    <section className='flex flex-col gap-10 mt-24 items-center'>
                        {legs.map((leg, index) => <LegCard key={index} leg={leg} />)}
                    </section>
                </form>
            </div>
        </main>
    );
}

export default LegsPage;