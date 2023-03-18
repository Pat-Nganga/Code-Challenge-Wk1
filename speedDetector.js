function speedDetector(speed){    
    if (speed < 70){
    console.log("Ok");
    }
    else {
        const demeritPoints = (speed - 70) /5;
        if (demeritPoints < 12){
        console.log(demeritPoints);
        }
         else{
            console.log("License suspended")
        }
    }
    
}
speedDetector(75);



