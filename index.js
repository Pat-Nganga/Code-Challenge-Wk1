let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
/*
write Code For the Code challenge
The grade generator's function is to receive a value beteen 0-100 and gives the grade.
*/

function gradeGenerator(num) {
   
    if (num>79 && num<=100) {
        return "A";
    } else if(num>=60 && num<=79) {
        return "B"
    } else if (num>=50 && num<=59) {
        return "C"
    } else if(num>40 && num<=49) {
        return "D";
    } else if (num>=0 && num<=  40){
        return "E";

    }else {
       return "invalid.";
    }
}



finalOutput=gradeGenerator(inputGrade);
document.getElementById('marks-id').append(finalOutput)
})





speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
/*
 write Code For the Code challenge
The function speed detector codes requires the user to input a speed value and it will give an output for the demerit points.
*/

function speedDetector(speed){    
    if (speed <= 70){
    return "Ok";
    }

    else {
        const demeritPoints = (speed - 70) /5;
        if (demeritPoints < 12){
        return demeritPoints;
        }
         else{
           return "License suspended";
        }
    }
    
}





finalOutput=speedDetector(inputSpeed)
    document.getElementById('speed-id').append(finalOutput)
    // document.getElementById('speed-id').innerHTML=finalOutput

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
/*write Code For the Code challenge
Calculates PAYE(tax) from the gross salary
input parameter: amount (gross salary)
*/

function calcPAYE (amount){
    let tax
      if (amount <= 24000) {
           tax = amount * 0.1 ;
        }
          else if  (amount> 24000 && amount <= 32333)
          { tax = amount * 0.25;
   
        }
          else {
               tax = amount  * 0.3;
           }
   return tax
        }
   console.log(calcPAYE(20000));
 
   
   
//    calculates NHIF amount deducted from a gross salary
    function calcNhif(amount){
        let nhif
        if (amount <= 5999){
            nhif = 150;
        }
        else if (amount >=6000 &&  amount <=7999){
            nhif = 300;
        }
       else if (amount >=8000 && amount <=11999){
            nhif =400;
        }
     
        else if (amount>=12000 && amount <=14999 ){
            nhif =500;
        }
       else  if (amount >=15000 && amount<=19999){
            nhif = 600;
        } 
      else if(amount >=20000 && amount<=24999){
            nhif = 750;
        }
        else if (amount >= 25000 && amount <=29999){
            nhif = 850;
        }
        else if (amount >=30000 && amount <=34999){
            nhif = 900;
        }
        else if(amount >=35000 && amount<=39999){
            nhif =950;
        }
        else if (amount>= 40000 && amount <=44999){
            nhif = 1000;
        }
       else  if (amount >=45000 && amount<=49999){
            nhif = 1100;
        }
       else  if (amount >=50000 && amount <=59999){
            nhif=1200;
       }
       else  if (amount>=60000 &&amount <=69999){
            nhif = 1300;
        }
       else if (amount>=70000 && amount <=79999){
            nhif =1400;
        }
       else  if (amount >=80000 && amount <=89999){
            nhif = 1500;
        }
       else  if (amount >=90000 && amount<=99999){
            nhif = 1600;
        }
        else {
            nhif = 1700;
        }
        return (nhif)
     
        }
        console.log(calcNhif(5000));
       
       
   
   
   // NSSF new rates.Assumption is the new rates are not yet in place thus the old rates have been used
   const nssf   = 400
   
   
   // To calculate the net  salary
   function netSalary(amount){
       return (amount - calcPAYE(amount)- calcNhif(amount) - nssf)
   
   }
   
   
 


finalOutput =netSalary(inputSalary)
document.getElementById('salary-id').append(finalOutput)
        
})
