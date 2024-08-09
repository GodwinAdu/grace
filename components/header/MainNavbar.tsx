import { currentProfile } from '@/lib/helpers/current-profile'
import React from 'react'
import Navbar from './Navbar';

const MainNavbar = async () => {
    const user = await currentProfile();
    const isAdmin = user?.admin
    return (
        <>
            <Navbar isAdmin={isAdmin} />
        </>
    )
}

export default MainNavbar
