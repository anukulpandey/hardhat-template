const { expect } = require("chai");

describe("Hello World Unit Tests", function () {
    it("should set the message to hello world", async function () {
      const [owner] = await ethers.getSigners();
        console.log((await owner.getBalance()).toString());
      const HelloWorld = await ethers.getContractFactory("HelloWorld");
  
      const helloWorld = await HelloWorld.deploy("hello world");

      expectedMessage = "hello world";
      actualMessage = await helloWorld.message();
      expect(expectedMessage).to.equal(actualMessage);
    });
  });