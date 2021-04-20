import React, { useRef } from "react";
export default function Panel({ isResult, points, addPoint }) {
    return (
        <div>
            <p style={{ margin: "0" }}>test</p>
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
                            key={item.x + item.y + item.fill}
                            r="5"
                            fill={item.fill}
                        ></circle>
                    );
                })}
            </svg>
        </div>
    );
}
