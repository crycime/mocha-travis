const calc = require('../calc.js');
const chai = require('chai');

let add = calc.add;
let subtract = calc.subtract;
let multiply = calc.multiply;
let divide = calc.divide;
let expect = chai.expect;

describe('加法函数的测试', function() {
  // //只執行
  // it.only('0 + 0 = 0', function() {
  //   expect(add(0, 0)).to.be.equal(0);
  // });
  //
  // //跳過
  // it.skip('0 + 1 = 1', function() {
	// expect(add(0, 1)).to.be.equal(1);
  // });

  //在測試套件的所有測試之前執行
  before(function () {
	
  })
  //在測試套件的每個測試之前執行
  beforeEach(function () {
	
  })
  //在測試套件的所有測試之后執行
  after(function () {
	
  })
  //在測試套件的每個測試之后執行
  afterEach(function () {
	
  })
  
  it('0 + 2 = 2', async function() {
	await expect(add(0, 2)).to.be.equal(2);
  });
});
