// Folder path and filenames
const folderPath = 'Functions/';
const scriptNames = [
    'Theme',
    'scroll',
    'Re-Orderer',
    'Editor',
    'Opn_Editor',
    'Hide_Editor',
    'elements',
    'countdown',
    'clock',
    'BG',
    'Download_HnDLR',
    'Add_NEW+'
];

// Build full script URLs dynamically
const scripts = scriptNames.map(name => `${folderPath}${name}.js`);

// Function to load a JavaScript file dynamically
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(`${src} loaded successfully`);
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
    });
}

// Load all scripts
Promise.all(scripts.map(loadScript))
    .then(messages => {
        messages.forEach(message => console.log(message));
        console.log("All scripts loaded successfully!");
    })
    .catch(error => console.error(error));
