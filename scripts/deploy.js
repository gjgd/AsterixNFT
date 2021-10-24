const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('AsterixNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the function.
  let txn = await nftContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()
  console.log("Minted NFT #1")

  let nftCount = await nftContract.getTotalNFTsMintedSoFar()
  // Wait for it to be mined.
  await txn.wait()
  console.log("NFT count", nftCount.toNumber())

  txn = await nftContract.makeAnEpicNFT()
  await txn.wait()
  console.log("Minted NFT #2")

  nftCount = await nftContract.getTotalNFTsMintedSoFar()
  await txn.wait()
  console.log("NFT count", nftCount.toNumber())
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
