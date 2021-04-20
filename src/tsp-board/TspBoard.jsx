import "./TspBoard.css";
import React, { useState, useEffect } from "react";
import { TspBoardStatus } from "./TspBoardConst";
import Panel from "../components/Panel";
import Points from "../components/points";
import { getRandom } from '../js/foundation'
export default function TspBoard() {
    const [combinations, setCombinations] = useState(
        TspBoardStatus.combinations
    );
    const [points, setPoints] = useState(TspBoardStatus.points);
    const addPoint = (e) => {
        setPoints([...points, { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY, city: points.length + 1, fill: getRandom() }])
    }
    return (
        <div className="tsp-board-container">
            <div className="board-container">
                <p>Combinations:</p>
                <p>Estimated time:</p>
                <div className="panel-container">
                    <Panel isResult={false} points={points} addPoint={addPoint}></Panel>
                    <div style={{ width: "2vw" }}></div>
                    <Panel isResult={true} points={points}></Panel>
                </div>
            </div>
            <Points points={points}></Points>
        </div>
    );
}
