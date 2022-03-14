window.onload = function () {
    let canvas = document.getElementById('snow');
    let ctx = canvas.getContext('2d');
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W - 20;
    canvas.height = H - 20;

    const flakes_count = 100; 
    let flakes = [];
 
    for (let i = 0; i < flakes_count; i++) {
        flakes.push({
            X: Math.random()* W, 
            Y: Math.random()* H,
            R: Math.random()*5 + 2, 
            D: Math.random() + 1 
        });
    }

    function drawFlakes() {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "#FFF";
        ctx.beginPath();

        for (let i = 0; i < flakes_count; i++) {
            let flake = flakes[i];
            console.log(flake);
            ctx.moveTo(flake.X, flake.Y);
            ctx.arc(flake.X, flake.Y, flake.R, 0, Math.PI *2, true);
        }
        ctx.fill();
        moveFlakes();
    }

    let angle = 0;

    function moveFlakes() {
        angle += 0.01;
        for (let i = 0; i < flakes_count; i++) {
            let flake = flakes[i];
            flake.Y += Math.pow(flake.D, 2) + 1;
            flake.X += Math.sin(angle);

            if(flake.Y > H) {
                flakes[i] = {
                    X: Math.random() * W,
                    Y: 0,
                    R: flake.R,
                    D: flake.D
                };
            }
        }
    }
    setInterval(drawFlakes, 25);
}