const dogs = artifacts.require("Dogs");
const Proxy = artifacts.require("Proxy");
const dogsV2 = artifacts.require("DogsV2");
module.exports = async function (deployer, network, accounts) {
// Old way of deploying
//   await deployer.deploy(dogs);
//   let dog = await dogs.deployed();
//   console.log(await dog.address);
//   await deployer.deploy(Proxy,dog.address);
  

//   let pDog = await Proxy.deployed();
//   await pDog.setNumberOfDogs(5);
//   console.log(await pDog.getNumberOfDogs());
//   console.log(await pDog.getCurrentAddress()); // Version 1 address;

//DEPLOYMENT:
const dog = await dogs.new();
const proxy = await Proxy.new(dog.address);
var proxyDog = await dogs.at(proxy.address);

//INTERACTION:
await proxyDog.setNumberOfDogs(5);
var noOfDogs = await proxyDog.getNumberOfDogs();
console.log("number before update : "+noOfDogs.toNumber());

//UPDATED
const dogv2 = await dogsV2.new();
proxy.upgrade(dogv2.address)
var proxyDog = await dogsV2.at(proxy.address);
proxyDog.initialize(accounts[0]);
var noOfDogs = await proxyDog.getNumberOfDogs();
console.log("number after update : "+noOfDogs.toNumber());
await proxyDog.setNumberOfDogs(30);
var noOfDogs = await proxyDog.getNumberOfDogs();
console.log("number last update : "+noOfDogs.toNumber());
};