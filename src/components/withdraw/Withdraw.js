import React from 'react'
import './withdraw.css';
import { WidgetSwap } from "../../bridges/Bridgeswap.tsx";
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

const Withdraw = () => {
  return (
    <div>
        <div className='per__navi'>
          <Sidebar />
          <Navbar />
        </div>
       <div className="sfb__heather">
         <h1 className="gradient__text">Exchange Near</h1>
       </div>
       <div className="sfb__swap">
        <WidgetSwap />
       </div>
    </div>
  )
}

export default Withdraw