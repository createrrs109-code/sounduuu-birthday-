window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);
};

const welcome = document.getElementById("welcome");
const story = document.getElementById("story");
const finalPage = document.getElementById("final");

document.getElementById("startBtn").onclick = () => {
    welcome.classList.remove("active");
    story.classList.add("active");
};

document.getElementById("nextBtn").onclick = () => {
    story.classList.remove("active");
    finalPage.classList.add("active");
    startConfetti();
};

function startConfetti() {

    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];

    for (let i = 0; i < 180; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 3,
            d: Math.random() * 180,
            color: `hsl(${Math.random()*360},100%,60%)`
        });
    }

    function draw() {

        ctx.clearRect(0,0,canvas.width,canvas.height);

        pieces.forEach(p=>{

            ctx.beginPath();
            ctx.fillStyle=p.color;
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fill();

            p.y+=3;
            p.x+=Math.sin(p.d);

            if(p.y>canvas.height){
                p.y=-10;
            }

        });

        requestAnimationFrame(draw);

    }

    draw();

}