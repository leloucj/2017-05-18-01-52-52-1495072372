module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}`);
        console.log(`o) 最大值 = ${sequence.maximal()}`);
        console.log(`o) 元素数量 = ${sequence.number()}`);
        console.log(`o) 平均值 = ${sequence.avg()}`);
};

class Sequence {
    var min
    var max
    var num=0
    var sum=0
    var nums
  constructor(input) {
    // Write your code here
      this.nums =input.split(",")
     
      var first = nums[0].split("")
      this.min=parseInt(first[1])
      var end =nums.length
      var last = nums[end-1].split("")
      this.max =parseInt(last[0])
      sum=min+max
      
      }

  minimum() {
    // Write your code here
      for(var i=1;i<nums.length-1;i++){
      if(min>nums[i]){
      min=nums[i]
      }          
      }
      if(min>max){
      min=max
      }
      return min
  }
  maximal(){
    for(var i=1;i<nums.length-1;i++){
      if(max<nums[i]){
        max=nums[i]
        }          
    }
      if(max<min){
      max=min
      }
      return max
      
  }

  number(){
      return (nums.length+2)
  }
  
  avg(){
      for(var i =1;i<sums.length-1;i++){
        sum+=nums[i]
      }
      return sum/(nums.length+2)
  }
  // Write your code here
}
