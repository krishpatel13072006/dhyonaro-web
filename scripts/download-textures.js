const fs = require('fs');
const path = require('path');

const texturesDir = path.join(__dirname, '..', 'public', 'textures');

// Ensure textures directory exists
if (!fs.existsSync(texturesDir)) {
  fs.mkdirSync(texturesDir, { recursive: true });
  console.log(`Created directory: ${texturesDir}`);
}

const texturesToDownload = [
  {
    name: 'earth-blue-marble.jpg',
    url: 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
  },
  {
    name: 'earth-topology.png',
    url: 'https://unpkg.com/three-globe/example/img/earth-topology.png'
  },
  {
    name: 'earth_clouds_1024.png',
    url: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
  }
];

async function downloadFile(url, dest) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: HTTP ${response.status}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.promises.writeFile(dest, buffer);
  console.log(`Downloaded: ${path.basename(dest)}`);
}

async function main() {
  console.log('Downloading Earth textures...');
  for (const item of texturesToDownload) {
    const dest = path.join(texturesDir, item.name);
    try {
      await downloadFile(item.url, dest);
    } catch (error) {
      console.error(`Error downloading ${item.name}:`, error.message);
    }
  }
  console.log('Finished downloading textures.');
}

main();
