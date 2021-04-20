import React, { useRef } from "react";
export default function Panel({ isResult, points, lines, addPoint }) {
    const keyName = isResult ? 'result' : 'process'
    return (
        <div>
            <p style={{ margin: "0" }}>{keyName}</p>
            <svg
                onClick={isResult ? null : (e) => { addPoint(e) }}
                className="rect"
                style={{ border: "1px solid black" }}
                width="200"
                height="200"
            >
                {points.map((item) => {
                    return (
                        <circle
                            cx={item.x}
                            cy={item.y}
                            key={item.x + item.y + item.fill + keyName}
                            r="5"
                            fill={item.fill}
                        ></circle>
                    );
                })}
                {lines.map((item) => {
                    return (
                        <line
                            x1={item.x1}
                            y1={item.y1}
                            x2={item.x2}
                            y2={item.y2}
                            stroke={item.stroke}
                            key={item.x1 + item.y1 + item.x2 + item.y2 + item.stroke + keyName}
                            strokeWidth="2" >
                        </line>
                    );
                })}

            </svg>
        </div >
    );
}
