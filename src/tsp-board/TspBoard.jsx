import "./TspBoard.css";
import React, { useState, useEffect } from "react";
import { TspBoardStatus } from "./TspBoardConst";
import Panel from "../components/Panel";
import Points from "../components/points";
import { getRandom, getLines } from '../js/foundation'
import TSP from '../js/TSP'
export default function TspBoard() {
    const [start, setStart] = useState(TspBoardStatus.start);
    const [combinations, setCombinations] = useState(
        TspBoardStatus.combinations
    );
    const [points, setPoints] = useState(TspBoardStatus.points);
    const [lines, setLines] = useState(TspBoardStatus.lines);
    const addPoint = (e) => {
        setPoints([...points, { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY, city: points.length + 1, fill: getRandom() }])
    }
    const getResult = (e) => {
        if (start) {
            setStart(false)
        } else {
            setStart(true)
            const tsp = new TSP(() => { }, () => { })
            tsp.prepareNodesAndGA(points, 100)
            setLines(getLines(points));
            tsp.start()
        }
    }
    return (
        <div className="tsp-board-container">
            <div className="board-container">
                <p>Combinations:</p>
                <p>Estimated time:</p>
                <div className="panel-container">
                    <Panel isResult={false} points={points} lines={lines} addPoint={addPoint}></Panel>
                    <div style={{ width: "2vw" }}></div>
                    <Panel isResult={true} points={points} lines={lines}></Panel>
                </div>
                <button className="handle-button" onClick={(e) => { getResult(e) }}>{start ? 'stop' : 'start'}</button>
            </div>
            <Points points={points}></Points>
        </div>
    );
}
