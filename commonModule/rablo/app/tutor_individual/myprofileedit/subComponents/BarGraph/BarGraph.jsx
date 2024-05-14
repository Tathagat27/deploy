"use client"
import { useState } from 'react'
import Bars from './Bars/Bars'
import './BarGraph.scss'
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Image from 'next/image'
import MapPin from "../../../../Images/Images_tutor/map-pin.svg"

const BarGraph = () => {
    const step = 500; // Step value

    const [lowerVal, setLowerVal] = useState(1000);
    const [upperVal, setUpperVal] = useState(7000);

    const updateByStep = (value) => {
        return Math.round(value / step) * step;
    };


    const handleLowerChange = (e) => {
        let lower = updateByStep(parseInt(e.target.value));
        let upper = parseInt(upperVal);

        if (lower > upper - step) {
            upper = lower + step;
            if (upper > 10000) upper = 10000;
            setUpperVal(upper);
        }
        setLowerVal(lower);
    };

    const handleUpperChange = (e) => {
        let upper = updateByStep(parseInt(e.target.value));
        let lower = parseInt(lowerVal);

        if (upper < lower + step) {
            lower = upper - step;
            if (lower < 1000) lower = 1000;
            setLowerVal(lower);
        }
        setUpperVal(upper);
    };


    return (
        <div className='BarGraph_Wrapper'>

            <div className='Graph_Selection'>
                <Bars lowerVal={lowerVal} upperVal={upperVal} />

                <div className='Section_9_range_bar_wrapper'>
                    <BiSolidLeftArrow className='arrow_range_bar' />
                    <div className="multi-range">
                        <input
                            type="range"
                            min="1000"
                            max="10000"
                            value={lowerVal}
                            id="lower"
                            onChange={handleLowerChange}
                        />
                        <input
                            type="range"
                            min="1000"
                            max="10000"
                            value={upperVal}
                            id="upper"
                            onChange={handleUpperChange}
                        />
                    </div>
                    <BiSolidRightArrow className='arrow_range_bar' />
                </div>
                <div className='Start_at'><p>Starts at</p><h4>₹1000</h4></div>
                <div className='Maximum'><p>maximum</p><h4>₹10K</h4></div>
                <div className='Ask_and_avg'>
                    <div className='Ask_Price'>
                        <h4>Min</h4>
                        <h4>{lowerVal}</h4>
                        <div>₹</div>
                    </div>
                    <div className='Avg_Price'>
                        <h4>Max</h4>
                        <h4>{upperVal}</h4>
                        <div>₹</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarGraph