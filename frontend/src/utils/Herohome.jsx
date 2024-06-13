import React from 'react'
import Content from '../components/Content/Content'


import Footer from '../components/Content/Footer'
import Sidebar from '../components/Content/Sidebar'

const Herohome = () => {
    return (
        <div>
            <div className='flex gap-3'>
                <Sidebar/>
                <Content />
            </div>
          <Footer/>
        </div>
    )
}

export default Herohome;

