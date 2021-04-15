import React, { useRef } from "react";
export default function Panel({ points }) {
    const divRef = useRef();
    return (
        <div>
            <p style={{ margin: "0" }}>test</p>
            <svg
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
                            r="5"
                            fill={item.fill}
                        ></circle>
                    );
                })}
            </svg>
        </div>
    );
}
