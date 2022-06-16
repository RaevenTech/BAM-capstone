import React, { useState } from "react";
import styles from "./BidCounter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
    increase,
    decrease,
    reset,
    increaseByAmount,
} from "../../slices/counter/conterSlice";

const BidCounter = () => {
    const amount = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [increaseAmount, setIncreaseAmount] = useState("€Bid");

    const addAmount = Number(increaseAmount) || 0;

    const resetAmount = () => {
        setIncreaseAmount(0);
    };

    return (
        <div className="container">
            <div className={styles.counter}>
                <button
                    className={styles.increase_btn}
                    onClick={() => dispatch(increase())}
                >
                    +
                </button>
                <p className={styles.amount}>{amount}</p>
                <button
                    className={styles.decrease_btn}
                    onClick={() => dispatch(decrease())}
                >
                    -
                </button>
                <div className={styles.amount_input}>
                    <input
                        value={increaseAmount}
                        type="text"
                        onChange={(e) => setIncreaseAmount(e.target.value)}
                    />
                </div>
                <button
                    className={styles.add_amount_btn}
                    onClick={() => dispatch(increaseByAmount(addAmount))}
                >
                    Bid
                </button>
                <button className={styles.reset_btn} onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default BidCounter;
