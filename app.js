var process1 = [0,0,0,0,1,0,0,0,0];
var process2 = [0,0,0,0,0,0,0,0];
var process3 = [0,0,0,0,0,0,0,0,0,0,0,0];
var qtmSize=2;
var qtmToRun=0;
var proc1q=0, proc2q=0, proc3q=0;
var proc1row = document.getElementById("proc1");
var proc2row = document.getElementById("proc2");
var proc3row = document.getElementById("proc3");
var proc1done = false,proc2done = false,proc3done = false;
var counter1 = 0,counter2 = 0,counter3 = 0;
var timer = 0;
var temp;

var sleep = (miliseconds) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, miliseconds);
    });
}
function hdint ()
{
    timer+=1000;
    sleep(timer).then( () => {
        alert("interrupt resolved");
    })
}



qtmSize = qtmSize - 1;
// while(!(proc1done && proc2done && proc3done))                        // printing array upto it's size
function running() {
    // sleep(1000);

    if(!proc1done)
    {
        if(++counter1 <= Math.ceil(process1.length/qtmSize+1))
        {
        timer+=500;
        sleep(timer).then( () => {
        if(proc1q != process1.length)
        {
            if((proc1q + qtmSize) < process1.length)
            {
                qtmToRun = proc1q + qtmSize;
            }
            else
            {
                qtmToRun = process1.length-1;
            }
            for(var i = proc1q ; i <= qtmToRun ; i++)
            {
                if(process1[proc1q] == 1)
                {
                    alert("Hardware interrupt occured in process 1 at quantum no.: " + (proc1q+1) );
                    hdint();
                }
                temp = document.createElement("td");
                temp.innerHTML = process1[proc1q];
                proc1row.append(temp);
                proc1q++;
            }
            if(proc1q == process1.length)
            {
                proc1done = true;
                console.log("proc 1 complete");
            }
        }
     })
    }
    }
    if(!proc2done)
    {
        if(++counter2 <= Math.ceil(process2.length/qtmSize+1))
        {
        timer+=500;
        sleep(timer).then( () => {
        if(proc2q != process2.length)
        {
            if((proc2q + qtmSize) < process2.length)
            {
                qtmToRun = proc2q + qtmSize;
            }
            else
            {
                qtmToRun = process2.length-1;
            }
            for(var i = proc2q ; i <= qtmToRun ; i++)
            {
                // sleep(1000);                                    //sleep function
                temp = document.createElement("td");
                temp.innerHTML = process2[proc2q];
                proc2row.append(temp);
                proc2q++;
            }
            if(proc2q == process2.length)
            {
                proc2done = true;
                console.log("proc 2 complete");
            }
        }
    })
    }
    }
    if(!proc3done)
    {
        if(++counter3 <= Math.ceil(process3.length/qtmSize+1))
        {
        timer+=500;
        sleep(timer).then( () => {
        if(proc3q != process3.length)
        {
            if((proc3q + qtmSize) < process3.length)
            {
                qtmToRun = proc3q + qtmSize;
            }
            else
            {
                qtmToRun = process3.length-1;
            }
            for(var i = proc3q ; i <= qtmToRun ; i++)
            {
                // sleep(1000);                                    // sleep function
                temp = document.createElement("td");
                temp.innerHTML = process3[proc3q];
                proc3row.append(temp);
                proc3q++;
            }
            if(proc3q == process3.length)
            {
                proc3done = true;
                console.log("proc 3 complete");
            }
        }
    })
    }
    }
    if (!(proc1done && proc2done && proc3done)) {
        setTimeout(() => {
            running();
        }, 50); 
    }
}
running();


// following sleep function is used for delaying

// function sleep(miliseconds) {
//     var delayTime = new Date().getTime() + miliseconds;

//     while (delayTime >= new Date().getTime()) {
//     }
// }



