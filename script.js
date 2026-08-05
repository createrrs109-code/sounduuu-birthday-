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
    typeLetter();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    story.classList.remove("active");
    finalPage.classList.add("active");
    startConfetti();
});

function startConfetti() {
startFireworks();
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
document.getElementById("cake").addEventListener("click", () => {

    document.getElementById("wishText").style.display = "block";

    document.getElementById("cake").style.transform = "scale(1.2)";

    setTimeout(() => {
        document.getElementById("cake").style.transform = "scale(1)";
    }, 300);

});
const message =
"Wishing you a birthday filled with happiness, laughter, peace, and beautiful memories.\n\nYou deserve every smile today and always. 🌸\n\nHappy Birthday once again! 🎂❤️";

function typeLetter() {
    const text = document.getElementById("letterText");
    text.innerHTML = "";

    let i = 0;

    function typing() {
        if (i < message.length) {
            if (message[i] === "\n") {
                text.innerHTML += "<br>";
            } else {
                text.innerHTML += message[i];
            }
            i++;
            setTimeout(typing, 35);
        }
    }

    typing();
}
document.getElementById("giftBox").addEventListener("click", () => {

    document.getElementById("giftMessage").style.display = "block";

    document.getElementById("giftBox").innerHTML = "🎉";

    document.getElementById("giftBox").style.transform = "scale(1.3) rotate(15deg)";

    document.getElementById("giftBox").style.filter =
        "drop-shadow(0 0 20px gold)";

    startConfetti();

    setTimeout(() => {
        document.getElementById("giftBox").style.transform =
            "scale(1) rotate(0deg)";
    }, 400);

});
function startFireworks() {

    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];

    for (let i = 0; i < 120; i++) {
        fireworks.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 6 + 2,
            radius: Math.random() * 3 + 2,
            life: 100,
            color: `hsl(${Math.random() * 360},100%,60%)`
        });
    }

    function animateFireworks() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        fireworks.forEach(f => {

            f.x += Math.cos(f.angle) * f.speed;
            f.y += Math.sin(f.angle) * f.speed;
            f.life--;

            ctx.beginPath();
            ctx.fillStyle = f.color;
            ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
            ctx.fill();

        });

        if (fireworks.some(f => f.life > 0)) {
            requestAnimationFrame(animateFireworks);
        }
    }

    animateFireworks();
}