import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SideCart = ({ watchTime }) => {
    const [time, setTime] = useState(watchTime);
    const [breakTime, setBreakTime] = useState(0);


    useEffect(() => {
        const getWatchTimeFromStorage = localStorage.getItem("watchTime");


    setTime(getWatchTimeFromStorage);

    const getBreakTimeFromStorage = localStorage.getItem("breakTime");
    setBreakTime(getBreakTimeFromStorage);

}, [watchTime]);
const handleBreaktime = (bt) => {
    localStorage.setItem("breakTime", bt);
    setBreakTime(bt);

}

const handleComplete=()=>{
    toast("Wow so easy !");
}

return (
    <div>
        <h1>My Cart</h1>
        <div className="mt-5 text-center">
            <p>Total Watch Time</p>
            <input type="text" value={time} disabled />
        </div>
        <h5>Add Break time</h5>
        <button onClick={() => handleBreaktime(15)} className='w-25 btn-circle m-1 btn btn-info'>15</button>
        <button className='w-25 btn-circle m-1 btn btn-warning'>20</button>
        <button className='w-25 btn-circle m-1 btn btn-danger'>25</button>
        <input type="text" value={breakTime} disabled />
        <button onClick={handleComplete
        } className='w-100 btn-circle m-1 btn btn-info'>Complete</button>

    </div>
);
};

export default SideCart;