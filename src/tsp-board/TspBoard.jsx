import "./TspBoard.css";
import React, { useState, useEffect } from "react";
import { TspBoardStatus } from "./TspBoardConst";
import Panel from "../components/Panel";
import Points from "../components/points";

export default function TspBoard() {
    const [combinations, setCombinations] = useState(
        TspBoardStatus.combinations
    );
    const [points, setPoints] = useState(TspBoardStatus.points);

    return (
        <div className="tsp-board-container">
            <div className="board-container">
                <p>Combinations:</p>
                <p>Estimated time:</p>
                <div className="panel-container">
                    <Panel points={points}></Panel>
                    <div style={{ width: "2vw" }}></div>
                    <Panel points={points}></Panel>
                </div>
            </div>
            <Points points={points}></Points>
        </div>
    );
}
