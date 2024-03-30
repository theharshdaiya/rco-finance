import { useEffect, useState } from 'react';

const useCountdown = (targetDate = new Date()) => {
    const countDownDate = targetDate.getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const difference = countDownDate - new Date().getTime()
            if (difference >= 0) {
                setCountDown(countDownDate - new Date().getTime());
            } else {
                setCountDown(null);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    if (!countDown) {
        return ["00", "00", "00", "00"]
    }
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
};

export default useCountdown;