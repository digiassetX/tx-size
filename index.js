/**
 * Very simple function to calculate the size of a Bitcoin or DigiByte transaction
 * @param {int} inputCount
 * @param {int} outputCount
 * @param {int} dataSize
 * @return {int}
 */
module.exports=(inputCount=1,outputCount=1,dataSize=0)=>{
    return 44+180*inputCount+34*outputCount+dataSize;
}