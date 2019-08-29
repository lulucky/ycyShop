/** 
 * 创建一个记录学生成绩的对象，
  提供一个添加成绩的方法，
  以及一个显示学生平均成绩的方法
 */ 
function grades(){
  this.grades=[];
  this.add=add;
  this.avarage=avarage
}
function add(grade) {
  this.grades.push(grade)
}
function avarage() {
  var total=0
  this.grades.forEach(ele => {
    total+=ele
  });
  var avarageGrade=total/this.grades.length
  return avarageGrade
}
var studentOne=new grades()
studentOne.add(87)
studentOne.add(89)
studentOne.add(76)
studentOne.add(80)
studentOne.add(90)
var avarageGrade=studentOne.avarage()
console.log("studentOne avarage :",avarageGrade)

