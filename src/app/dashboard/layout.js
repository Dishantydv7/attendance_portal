import React from 'react'
import Sidenav from "./_components/Sidenav"
import Header from "./_components/Header"

function layout({ children }) {
    return (
        <div className='flex'>
            <div className='md:w-64'>
                <Sidenav />
            </div>
            <div className= 'w-full md:ml-64'>
                <Header/>
                {children}
            </div>
        </div>
    )
}

export default layout