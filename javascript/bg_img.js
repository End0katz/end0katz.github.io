// Configuration: Chance percentage for adding the animated-hueshift class
const effectChance = 5;

const fixed = false;
const test = 'blur';

const effects = [
    'hueshift',
    'bright'
]

const imageChance = 5;
const images = [
    '/images/gremlin.png',
    '/images/java-logo.png'
]

bg_img = `
    <div class="bg-logo-div" >
        <img src="/images/logo.png" alt="Logo In Background" class="bg-logo-img" />
    </div > `;

// Append bg_img to the document body
const tempDiv = document.createElement('div');
tempDiv.innerHTML = bg_img;
document.body.appendChild(tempDiv.firstElementChild);

// Set image to the <img> tag inside bg_img
const image = document.querySelector('.bg-logo-img');

// Random chance to use a different image
if (Math.random() * 100 < imageChance) {
    image.src = images[Math.floor(Math.random() * images.length)];
}

// Apply the animated-hueshift class if the condition is met
if (Math.random() * 100 < effectChance) {
    image.classList.add('animated-' + (fixed ? test : (effects[Math.floor(Math.random() * effects.length)])));
}
