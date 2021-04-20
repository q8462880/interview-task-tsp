export function getRandom() {
    let a = 20,
        b = 230,
        c = Math.floor(Math.random() * 255);

    function randomSort() {
        return Math.random() < 0.5 ? -1 : 1;
    }
    let randomArray = [a, b, c].sort(randomSort);
    let output = `rgb(${randomArray[0]},${randomArray[1]},${randomArray[2]})`;
    return output;
}

/**打乱顺序 */
export function shuffle(arr) {
    let i = arr.length
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]]
    }

    return arr
}

export const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export function getLines(arr) {
    let temp = []
    arr.forEach((item, index) => {
        temp.push({
            x1: arr[index].x,
            y1: arr[index].y,
            x2: index === arr.length - 1 ? arr[0].x : arr[index + 1].x,
            y2: index === arr.length - 1 ? arr[0].y : arr[index + 1].y,
            stroke: item.fill
        })
    })
    return temp
}
