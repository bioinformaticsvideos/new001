function askQuestion() {
    const question = document.getElementById('question').value;
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}` // Add your OpenAI API key here
        },
        body: JSON.stringify({
            prompt: question,
            max_tokens: 150
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.choices[0].text.trim());
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function launch() {
    alert('Launching the simulator!');
}

function abort() {
    alert('Aborting the launch.');
}

function moveForward() {
    alert('Moving forward.');
}

function moveBackward() {
    alert('Moving backward.');
}

function turnLeft() {
    alert('Turning left.');
}

function turnRight() {
    alert('Turning right.');
}

// Initialize Three.js and create a simple scene
let scene, camera, renderer, airplane;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-canvas').appendChild(renderer.domElement);

    // Add a simple airplane model
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    airplane = new THREE.Mesh(geometry, material);
    scene.add(airplane);

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    airplane.rotation.x += 0.01;
    airplane.rotation.y += 0.01;
    renderer.render(scene, camera);
}

init();
