```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract AutoNFT is ERC721 {
    uint256 public tokenCounter;

    struct NFT {
        string color;
        string shape;
    }

    mapping(uint256 => NFT) public nfts;

    constructor() ERC721("AutoNFT", "ANFT") {
        tokenCounter = 0;
    }

    function createNFT(string memory _color, string memory _shape) public {
        nfts[tokenCounter] = NFT(_color, _shape);
        _mint(msg.sender, tokenCounter);
        tokenCounter++;
    }

    function getNFT(uint256 _tokenId) public view returns (string memory, string memory) {
        return (nfts[_tokenId].color, nfts[_tokenId].shape);
    }
}
```

