'use client';

import Image from "next/image";
import user from '@/public/user.webp';
import { raleway } from "../utilities/fonts";
import { QuestionMark } from "@mui/icons-material";
import React from "react";

const UserSection: React.FC = () => {
    return (
        <section className='flex items-center gap-10'>
            <section className='flex items-center gap-5'>
                <div className='cursor-pointer'>
                    <Image width={40} src={user} alt='user' />
                </div>
                <span className={`text-xl ${raleway.className}`}>Pepe Ladino</span>
            </section>
            <span className='flex items-center justify-center bg-[#e9eff8] hover:bg-[#cddcf0] text-[#1cb8d8] rounded w-10 h-10 cursor-pointer'>
                <QuestionMark fontSize='small' />
            </span>
        </section>
    );
};

export default UserSection;