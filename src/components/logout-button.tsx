'use client';

import Link from 'next/link';
import { Logout } from '@mui/icons-material';

const LogoutButton: React.FC = () => {
    return (
        <Link href='/' className={`block hover:bg-gray-100 text-gray-500 hover:text-gray-700 text-center py-2 px-4 rounded w-48`}>
            <span className='me-2'><Logout fontSize='small'/></span>
            <span>Log out</span>
        </Link>
    );
}

export default LogoutButton;