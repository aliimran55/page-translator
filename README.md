## Requirements

- [Node.js](https://nodejs.org/)
- Google Chrome

## Installation

1. Clone or download this repository.
2. Open a terminal in the project folder.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Build the extension:

   ```bash
   npm run build
   ```

5. Copy the manifest file into the build folder:

   ```bash
   cp manifest.json dist/manifest.json
   ```

6. Open `chrome://extensions` in Google Chrome.
7. Enable **Developer mode**.
8. Click **Load unpacked** and select the `dist` folder.
9. Open a webpage, select some English text, and view the German translation.

## Technologies

- React
- JavaScript
- CSS
- MyMemory Translation API
