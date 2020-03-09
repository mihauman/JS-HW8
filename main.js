class studentInfo {
constructor(university, course, fullName){
this.university = university;
this.course = course;
this.fullName = fullName;
this.marks = [5,4,4,5];
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
  return this.marks;
}
//#4
setMarks(mark){
  return this.marksArray.push(mark);
}
//#5
getAverageMark(){
  return (this.marks.reduce((sum, item) => sum += item, 0)) / this.marks.length;
}
//#6
dismiss() {
return this.dismiss = true;
}
//#7
recover() {
  return this.dismiss = false;
}
}
//Advanced

class BudgetStudent{
  constructor(university, course, fullName){
    super(university, course, fullName);
    this.marks =  [5, 5, 5, 3];
    this.dismiss = false;  
    setInterval(()=>{this.getScholarship()},1000);
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

const ostap = new Student('Студент 1го курса', 'Высшей Школы Мошенничества г.Одесса', 'Остап Родоманський Бендер');
console.log(ostap.getInfo());

console.log(ostap.marks);
ostap.marks = 5;
console.log(ostap.marks);
console.log(ostap.getAverageMark());
ostap.dismiss();
console.log(ostap.marks);
ostap.recover();
console.log(ostap.marks);

//тест для адвансед

const misha = new BudgetStudent('Студент 2 курса', 'НУБіП', 'Сіманов Михайло Михайлович');
console.log(misha.getInfo());

console.log(misha.getScholarship());