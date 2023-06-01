import React from 'react';
import SliderInput from './SliderInput';

function Configure() {
    return (
        <div className='setg'>
            <div className='setg-child'>
                <div>Focus<SliderInput/></div>
                <div>Short Break<SliderInput/></div>
                <div>Long Break<SliderInput/></div>
                <div>No. of Sessions<SliderInput/></div>
            </div>
            <div className='setg-child'>div2</div>
        </div>
    )
}

export default Configure