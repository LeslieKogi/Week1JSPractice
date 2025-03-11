/* Speed Detector (Toy Problem) */

function speedDetector(speed){
    if(speed<70){
        return `OK`    
    }
    else {
        const points= speed-70
        const points2=Math.floor(points/5)

        if(points2>12){
            return"liscence suspended"
        }
        else{
            return`${points2}`
        }
    }
}
console.log (speedDetector(40))
console.log (speedDetector(135))


