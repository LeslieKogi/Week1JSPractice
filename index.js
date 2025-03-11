/*Student Grade Generator(Toy Problem) */

function studentMarks(marks){
    if(marks>79){
        return `Grade= A` /*marks from 80 and above=A grade */
    }
    else if(marks>59 && marks<80){
        return `Grade= B` /* marks from 60 to 79 = B grade*/
    }
    else if(marks>49&& marks<60){
        return `Grade= C` /* marks from 50 to 59 = C grade*/
    }
    else if(marks>39 && marks<50){
        return `Grade= D` /* marks from 40 to 49 = D grade*/
    }
    else {
        return `Grade= E` /* marks from 39 and below = E grade*/
    }


}
console.log (studentMarks(39))
console.log(studentMarks(49))