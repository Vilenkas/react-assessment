import Link from "next/link";

const HomePage: React.FC = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-16'>
            <Link href='/' className='bg-[#ddf0f2] hover:bg-[#bce1e5] text-[#2acbd8] hover:text-[#1ab2c0] text-center font-semibold py-2 px-4 rounded w-40 shadow-md'>
                Start
            </Link>
        </div>
    );
}

export default HomePage;