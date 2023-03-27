// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract RentalCollection is ERC721, Ownable {

    struct Rental {
        address owner;
        string name;
        string symbol;
        string location;
    }

    struct RentalPeriod {
        uint256 id;
        uint256 startTimestamp;
        uint256 endTimestamp;
        bytes32 renter;
        bool rented;
        bool isPaid;
    }

    struct Renter {
        address renter;
        string firstName;
        string lastName;
    }

    mapping(uint256 => RentalPeriod) private rentalPeriods;
    mapping(uint256 => Rental) public Rentals;

    constructor() ERC721("", "") {

    _safeMint(0x0000000000000000000000000000000000000001,0);
    rentalPeriods[0] = RentalPeriod(0,0,1,keccak256(abi.encodePacked(0x0000000000000000000000000000000000000001)),false,false);

    }

    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;

    function createRental(string memory name, string memory symbol, string memory location, address owner) external onlyOwner {
        Rental storage newCollection = Rentals[0];
        newCollection.owner = owner;
        newCollection.name = name;
        newCollection.symbol = symbol;
        newCollection.location = location;
    }

    function createRentalPeriod(uint256 _startTimestamp, uint256 _endTimestamp, address _renter, bool _isPaid, bool _rented) external returns (uint256) {
        require(_startTimestamp < _endTimestamp, "Invalid rental period");
        
        bytes32 walletHash = keccak256(abi.encodePacked(_renter));
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _safeMint(_msgSender(), newTokenId);
        rentalPeriods[newTokenId] = RentalPeriod(newTokenId, _startTimestamp , _endTimestamp , walletHash, _rented , _isPaid);
    
        return newTokenId;
    }

    function getRentalPeriodById(uint256 rentalPeriodId) external view returns (RentalPeriod memory) {
        require(_exists(rentalPeriodId), "Rental period does not exist");
        return rentalPeriods[rentalPeriodId];
    }

    function getRentalPeriodsByAddress(address _renter) external view returns (RentalPeriod[] memory) {
        uint256 totalRentals = _tokenIds.current() +1;
        RentalPeriod[] memory rentalPeriodsByAddress = new RentalPeriod[](totalRentals);
        bytes32 walletHash = keccak256(abi.encodePacked(_renter));
        uint256 count = 0;
        
        for (uint256 i = 0; i < totalRentals; i++) {
            if (rentalPeriods[(i)].renter == walletHash) {
                rentalPeriodsByAddress[count] = rentalPeriods[i];
                count++;
            }
        }
        
        // resize the rentalPeriodsByAddress array to remove any empty elements
        if (count < totalRentals) {
            RentalPeriod[] memory resizedRentalPeriodsByAddress = new RentalPeriod[](count);
            for (uint256 j = 0; j < count; j++) {
                resizedRentalPeriodsByAddress[j] = rentalPeriodsByAddress[j];
            }
            rentalPeriodsByAddress = resizedRentalPeriodsByAddress;
        }
        return rentalPeriodsByAddress;
    }

    function burn(uint256 tokenId) external {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "Caller is not owner nor approved");
        require(_exists(tokenId), "Token does not exist");
        _burn(tokenId);
        removeRental(tokenId);
    }

    function removeRental(uint256 rentalId) private {
        require(rentalPeriods[rentalId].id == rentalId, "Rental does not exist");
    delete rentalPeriods[rentalId];
    }
}