/**
 *
 * Created by Tim on 9/18/16.
 */

const testNums = [1,2,3,4,5,6,7];

function sumFor(list){
  let sum = 0;
  for(let i = 0; i < testNums.length; i++){
    sum += testNums[i];
  }
  return sum;
}

function sumWhile(list){
  let sum = 0;
  let i = 0;
  while(i < testNums.length){
    sum += testNums[i];
    i++;
  }
  return sum;
}

function sumRecursion(list){
  if(list.length == 1)
    return list[0];
  else
    return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list){
  let sum = _.reduce(list, function(memo, val){return memo + val}, 0);
  return sum;
}

console.log(sumFor(testNums));
console.log(sumWhile(testNums));
console.log(sumRecursion(testNums));
console.log(sumTheSimpleWay(testNums));