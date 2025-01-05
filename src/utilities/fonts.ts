import { Poppins, Raleway } from 'next/font/google';

const poppins = Poppins({ weight: '500', subsets: ['latin'] });
const poppinsLight = Poppins({ weight: '300', subsets: ['latin'] });
const raleway = Raleway({ weight: '500', subsets: ['latin'] });

export { poppins, poppinsLight, raleway };