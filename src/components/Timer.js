import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import { BsPlayCircle, BsPauseCircle, BsArrowClockwise, BsSkipEnd } from "react-icons/bs";
import "./Timer.css";
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';


const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">Too lale...</div>;
    }
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    return (
        <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{minutes}:{seconds}</div>
            <div className="text">seconds</div>
        </div>
    );
};

export default function Timer() {
    const [Playing, setPlaying] = useState(false);
    const [key, setKey] = useState(0);

    const resetAndPause = async () => {
        setKey(prevKey => prevKey + 1);
        setPlaying(false);

    }

    const notify = async () => {
        console.log('notified');
        let permissionGranted = await isPermissionGranted();
        if (!permissionGranted) {
            const permission = await requestPermission();
            permissionGranted = permission === 'granted';
        }
        if (permissionGranted) {
            sendNotification({ title: 'TAURI', body: 'Tauri is awesome!' });
        }
    }
    return (
        <div>
            <div className="timer-wrapper">
                <CountdownCircleTimer
                    key={key}
                    isPlaying={Playing}
                    duration={25*60}
                    colors={["#004777", "#F7B801", "#A30000"]}
                    colorsTime={[7, 0]}
                    onComplete={notify}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </div>
            <div className="btns">
                <BsArrowClockwise className="rs" style={{ fontSize: '30px', marginTop: 'inherit' }} onClick={resetAndPause}></BsArrowClockwise>
                <div style={{ marginLeft: "10px", marginRight: "10px", fontSize: '50px' }}>
                    {Playing && <BsPauseCircle onClick={() => setPlaying(!Playing)}></BsPauseCircle>}
                    {!Playing && <BsPlayCircle onClick={() => setPlaying(!Playing)}></BsPlayCircle>}
                </div>
                <BsSkipEnd style={{ fontSize: '30px', marginTop: 'inherit' }}></BsSkipEnd>
            </div>

        </div>
    )
}
