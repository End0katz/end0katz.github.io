// List of script files to include
const scripts = [
    '/blobj/javascript/navbar.js',
    '/javascript/bg_img.js'
];

console.log(scripts);

// Function to dynamically add scripts to the body
scripts.forEach((src) => {
    console.log(src);
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true; // Optional: Load scripts asynchronously
    script.defer = true;
    console.log(script.src);
    document.body.appendChild(script);
});
