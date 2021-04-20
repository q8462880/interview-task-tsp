import "./TspBoard.css";
import React, { useState, useMemo } from "react";
import { TspBoardStatus } from "./TspBoardConst";
import Panel from "../components/Panel";
import Points from "../components/points";
import { getRandom, getLines, getLinesByOrders } from '../js/foundation'
import TSP from '../js/TSP'
export default function TspBoard() {
    const [start, setStart] = useState(TspBoardStatus.start);
    const [combinations, setCombinations] = useState(
        TspBoardStatus.combinations
    );
    const [points, setPoints] = useState(TspBoardStatus.points);
    const [lines, setLines] = useState(TspBoardStatus.lines);
    const [distance, setDistance] = useState(TspBoardStatus.distance);
    const addPoint = (e) => {
        setPoints([...points, { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY, city: points.length + 1, fill: getRandom() }])
    }
    const tsp = useMemo(
        () => {
            return new TSP(() => { }, () => { })
        }, [])

    const refreshStatu = (info) => {
        setLines(getLinesByOrders(points, info.orders));
        setDistance(tsp.getDistance(info.orders))
    }

    const getResult = (e) => {
        if (start) {
            setStart(false)
            tsp.stop()
        } else {
            setStart(true)
            tsp.prepareNodesAndGA(points, 100)
            setLines(getLines(points));
            tsp.start(refreshStatu)
        }
    }

    return (
        <div className="tsp-board-container">
            <div className="board-container">
                {/* <p>Combinations:</p>
                <p>Estimated time:</p> */}
                <div className="panel-container">
                    <Panel isResult={false} points={points} lines={lines} addPoint={addPoint}></Panel>
                    <div style={{ width: "2vw" }}></div>
                    <Panel isResult={true} points={points} lines={lines}></Panel>
                </div>
                <button className="handle-button" onClick={(e) => { getResult(e) }}>{start ? 'stop' : 'start'}</button>
            </div>
            <Points points={points} distance={distance}></Points>
        </div>
    );
}
