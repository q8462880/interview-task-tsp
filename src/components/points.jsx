import "./points.css";
export default function Points({ points }) {
    return (
        <div>
            <h3>Points ({points.length}))</h3>
            <div style={{ width: "300px" }}>
                {points.map((element, index) => {
                    return (
                        <div className="point-block"
                            key={element.x + element.y + element.fill}>
                            x:{element.x} y:{element.y}
                        </div>
                    );
                })}
                <div>Route length:</div>
            </div>
        </div>
    );
}
