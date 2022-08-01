import * as React from 'react';

interface IwinnersItemProps {
    id: number;
    wins: number;
    time: number;
}

function WinnersItem({wins, time, id}: IwinnersItemProps) {
    return (
        <div className="winners-item">
            <div className="winners-item__number">{id}</div>
            <div className="winners-item__car"></div>
            <div className="winners-item__name"></div>
            <div className="winners-item__wins">{wins}</div>
            <div className="winners-item__time">{time}</div>
        </div>
    )
}

export default WinnersItem;