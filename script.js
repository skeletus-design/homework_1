const student = "Воронин Никита Валерьевич"; 

document.getElementById("student").innerHTML = student;

let a = prompt('предполагаемый результат первой команды')
let b = prompt('предполагаемый результат второй команды') 
let c = prompt('реальный результат первой команды')
let d = prompt('реальный результат второй команды')   
let score_real = [c,d];
let score_expected = [c,d];
if  
(a>b) {score_real = 0} 
else if 
(a==b) {score_real = 1}
else
 score_real = 2
if  
(c>d) {score_expected = 0} 
else if
 (c==d) {score_expected = 1}
else 
score_expected = 2 
 if (b==d,a==c) {
    alert( 'Счёт и результат были угаданы верно !' );
   }  
else if  (score_real == score_expected) {
  alert( 'Счёт не угадали!' )
    alert( 'Результат был угадан верно!' );
}
else
{ 
  alert( 'Счёт не угадали, результат не был угадан!' );
}
