module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11])
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximal()}
o) 元素数量 = ${sequence.number()}
o) 平均值 = ${sequence.avg()}`)
};

class Sequence {

  constructor(input) {
    // Write your code here
    this.array =input
      
      }

  minimum() {
    // Write your code here
      var min=this.array[0]
      for(var i=1;i<this.array.length;i++){      
      if(min>this.array[i]){
      min=this.array[i]
      }          
      }
 
      return min
  }
  maximal(){
    var max=this.array[0]
      for(var i=1;i<this.array.length;i++){      
      if(max<this.array[i]){
      max=this.array[i]
      }          
      }
 
      return max
      
  }

  number(){
      return (this.array.length)
  }
  
  avg(){
      var sum=0
      for(var i =0;i<this.array.length;i++){
        sum+=this.array[i]
      }
      return sum/(this.array.length)
  }
  // Write your code here
}
