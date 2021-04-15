import "./points.css";
export default function Points({ points }) {
    return (
        <div>
            <h3>Points ({points.length}))</h3>
            <div style={{ width: "300px" }}>
                {points.map((element) => {
                    return (
                        <div className="point-block">
                            x:{element.x} y:{element.y}
                        </div>
                    );
                })}
                <div>Route length:</div>
            </div>
        </div>
    );
}
