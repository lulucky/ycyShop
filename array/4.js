/**
 * 创建一个对象，将字母存储在一个数组中，
 * 并用一个方法将字母连在一起，显示成一个单词
 */
function words(){
  this.word=[];
  this.add=add;
  this.printWord=printWord
}
function add(letter) {
  this.word.push(letter)
}
function printWord() {
  var printWords=this.word.join('')
  return printWords
}
var wordOne=new words()
wordOne.add('h')
wordOne.add('e')
wordOne.add('l')
wordOne.add('l')
wordOne.add('o')
var word=wordOne.printWord()
console.log(word)
