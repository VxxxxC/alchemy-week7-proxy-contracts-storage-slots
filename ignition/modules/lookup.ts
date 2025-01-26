import hardhat from "hardhat";

const hre = hardhat;
const { ethers } = hre;

const keccak256 = ethers.keccak256;
const hexValue = ethers.toBeHex;
const hexZeroPad = ethers.zeroPadValue;
const toUtf8 = ethers.toUtf8Bytes;

const contract = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";

async function lookup() {
  // NOTE: Sample 1 :
  // const key = hexZeroPad(hexValue(21), 32);
  // const baseKey = hexZeroPad(hexValue(0x2), 32);
  // const concat = ethers.concat([key, baseKey]);
  // const slot = keccak256(concat);
  // const getStorage = await ethers.provider.getStorage(contract, slot);
  // console.log(parseInt(getStorage)); // keccak256(ethers.concat([21, 0x2])) = 888

  //NOTE: Sample 2 :
  const storage = await ethers.getContractAt("Storage", contract);
  storage
    .check()
    .then(() =>
      console.log(
        "SHOULD SEE THE 'check' FUNCTION RETURNING RESULT AT THE HARDHAT NODE SERVER"
      )
    )
    .catch((e) => console.error(e));

  const slot = keccak256(toUtf8("Hello World"));
  const getStorage = await ethers.provider.getStorage(contract, slot);
  console.log("Hello World slot : ", parseInt(getStorage)); // keccak256(toUtf8Bytes("Hello World")) = 150;
}

lookup().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});

