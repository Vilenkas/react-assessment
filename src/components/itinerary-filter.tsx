'use client';

import { useState } from 'react';
import { CurrencyPound, FilterList, Mood, Search, StarOutline } from '@mui/icons-material';
import { poppins } from '../utilities/fonts';
import { Menu, MenuItem, ListItemIcon } from '@mui/material';

const ItineraryFilter: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='mt-12'>
            <div className='flex w-[50%] gap-4'>
                <div className='flex-1 relative'>
                    <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
                    <input
                        type='text'
                        placeholder='Search'
                        className={`block h-12 w-full ps-14 pe-4 py-3 bg-gray-50 rounded outline-none ring ring-transparent focus:ring-[#01c2d2] ring-offset-2 ${poppins.className}`}
                    />
                </div>
                <button
                    className='flex items-center justify-center bg-[#00bdd6] hover:bg-[#00a8bf] rounded w-12 h-12'
                    onClick={handleClick}>
                    <FilterList className='text-white' />
                </button>
            </div>

            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>
                    <ListItemIcon><Mood fontSize='small'/></ListItemIcon>Most Popular
                </MenuItem>
                <MenuItem>
                    <ListItemIcon><CurrencyPound fontSize='small'/></ListItemIcon>Price, Low to High
                </MenuItem>
                <MenuItem>
                    <ListItemIcon><StarOutline fontSize='small'/></ListItemIcon>Rate, High to Low
                </MenuItem>
            </Menu>
        </div>
    );
}

export default ItineraryFilter;