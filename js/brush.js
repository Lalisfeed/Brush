document.addEventListener('load', () => {
    const board = document.querySelector("#board")
})
const brush = board.getContext('2d')
let brushColor = "#d40000"
document.querySelectorAll('.btn').forEach((button) => {
    button.onclick = function () {
        brushColor = button.dataset.color
    }
})

board.width = window.innerWidth;
board.height = window.innerHeight - 80;


window.addEventListener('resize', ()=> {
    board.width = window.innerWidth;
    board.height = window.innerHeight - 80;
})

let painting = false;

function StartLocation(e) {
    painting = true;
    Sketch(e);
}
    
function EndLocation() {
    painting = false;
    brush.beginPath();
}

function Sketch(e) {
    if (!painting) return;
    brush.lineWidth = 10;
    brush.lineCap = "round";
    brush.strokeStyle = brushColor

    brush.lineTo(e.clientX, e.clientY);
    brush.stroke();
    brush.beginPath();
    brush.moveTo(e.clientX, e.clientY);
}


board.addEventListener('mousedown', StartLocation)
board.addEventListener('mouseup', EndLocation)
board.addEventListener('mousemove', Sketch)