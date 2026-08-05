const welcome = document.getElementById("welcome");
const story = document.getElementById("story");
const finalPage = document.getElementById("final");

document.getElementById("startBtn").addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.play();

    welcome.classList.remove("active");
    story.classList.add("active");
});

document.getElementById("letterBtn").addEventListener("click", () => {
    document.getElementById("loveLetter").style.display = "block";
    document.getElementById("letterBtn").style.display = "none";
});

document.getElementById("nextBtn").addEventListener("click", () => {
    story.classList.remove("active");
    finalPage.classList.add("active");
    startConfetti();
});

function startConfetti() {

    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    for (let i = 0; i < 180; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            dx: (Math.random() - 0.5) * 2,
            dy: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360},100%,60%)`
        });
    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {

            ctx.beginPath();
            ctx.fillStyle = p.color;
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (p.y > canvas.height) {
                p.y = -10;
            }

        });

        requestAnimationFrame(animate);

    }

    animate();

}