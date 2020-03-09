class StudentInfo {
constructor(university, course, fullName){
this.university = university;
this.course = course;
this.fullName = fullName;
this.marksArray = [5,4,4,5];
this.dismiss = false;
}
//#2
getInfo(){
    return  `${this.course} ${this.university} ${this.fullName}`;
  }  
//#3
getMarks(){
  if(this.dismiss){
    return null;
  }
  return this.marksArray;
}
//#4
setMarks(mark){
  return this.marksArray.push(mark);
}
//#5
getAverageMark(){
  return (this.marksArray.reduce((sum, item) => sum += item, 0)) / this.marksArray.length;
}
//#6
getDismiss() {
return this.dismiss = true;
}
//#7
getRecover() {
  return this.dismiss = false;
}
}
//Advanced

class BudgetStudent extends StudentInfo {
  constructor(university, course, fullName){
    super(university, course, fullName);
    this.marksArray =  [5, 5, 5, 3];
    this.dismiss = false;  
   setTimeout(()=>{this.getScholarship()},30000);
  }
 
 getScholarship(){
  if(this.getAverageMark() >=4 && !this.dismiss){
    console.log("Ви отримали 1400 грн стипендії");
  }
  else{
    console.log("Стипендія не начислена");
  }
 }
}
//тест для базового завдання

const ostap = new StudentInfo('Студент 1го курса', 'Высшей Школы Мошенничества г.Одесса', 'Остап Родоманський Бендер');
console.log(ostap.getInfo());

console.log(ostap.marksArray);
ostap.marks = 5;
console.log(ostap.marksArray);  
console.log(ostap.getAverageMark());
console.log(ostap.getDismiss());
console.log(ostap.marksArray);
console.log(ostap.getRecover());
console.log(ostap.marksArray); 

//тест для адвансед

const misha = new BudgetStudent('Студент 2 курса', 'НУБіП', 'Сіманов Михайло Михайлович');
console.log(misha.getInfo());
console.log(misha.getScholarship());