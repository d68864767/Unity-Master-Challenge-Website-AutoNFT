```javascript
// Unity Loader Script
const gameInstance = UnityLoader.instantiate("unity-game", "Build/UnityProject.json", {onProgress: UnityProgress});

// Get the Generate NFT button
const generateNFTButton = document.getElementById('generate-nft');

// Add event listener to the Generate NFT button
generateNFTButton.addEventListener('click', () => {
    // Call the GenerateNFT function in the UnityScripts class
    gameInstance.SendMessage('UnityScripts', 'GenerateNFT');
});

// Function to display the generated NFT
function displayNFT(nft) {
    // Get the NFT display div
    const nftDisplay = document.getElementById('nft-display');

    // Clear the current NFT display
    nftDisplay.innerHTML = '';

    // Create a new div for the NFT
    const nftDiv = document.createElement('div');

    // Set the innerHTML of the nftDiv to the NFT data
    nftDiv.innerHTML = `
        <h3>${nft.name}</h3>
        <p>Color: ${nft.color}</p>
        <p>Shape: ${nft.shape}</p>
    `;

    // Append the nftDiv to the nftDisplay
    nftDisplay.appendChild(nftDiv);
}

// Function to receive the generated NFT from Unity
function receiveNFT(nft) {
    // Parse the NFT data
    const parsedNFT = JSON.parse(nft);

    // Display the NFT
    displayNFT(parsedNFT);
}

// Add the receiveNFT function to the window object so it can be called from Unity
window.receiveNFT = receiveNFT;
```
</p></p>