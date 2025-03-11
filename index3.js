/* Net Salary Calculator (Toy Problem)*/

function grossSalary(basicSalary, bonuses, allowances) {
    return basicSalary + bonuses + allowances   /* grossSalary*/
}
console.log(grossSalary(80000, 1600, 200))


function pensionableSalary(gross) {
    if (gross < 8001) {
        return  gross
    }
    else if (gross > 8001 && gross < 72001) {
        return  gross
    }
    else if(gross>72000){
        return  72000
    }
}
console.log(pensionableSalary (grossSalary(80000, 1600, 200))) 

/* NSSF  calculation*/
 
function nssf(pensionableSalary){
    return 6/100*pensionableSalary
}

console.log(nssf((pensionableSalary (grossSalary(80000, 1600, 200))) ))

/* SHIF calculation */

function shif(grossSalary){
    return 2.75/100*grossSalary
}
console.log(shif((grossSalary(80000, 1600, 200))))

/* Getting taxable salary*/

function taxableSalary(gross,NSSF,SHIF){
    return gross-(NSSF+SHIF)
}
/*console.log(taxableSalary((grossSalary(80000, 1600, 200)),(nssf((pensionableSalary (grossSalary(80000, 1600, 200))) )),(shif((grossSalary(80000, 1600, 200))))))*/

/* simplifying the taxableSalary function*/
let taxable = taxableSalary((grossSalary(80000, 1600, 200)),(nssf((pensionableSalary (grossSalary(80000, 1600, 200))) )),(shif((grossSalary(80000, 1600, 200)))))

console.log(taxable)

/* PAYE*/

function paye(taxableSalary){
    if(taxableSalary<=24000){
        const tax= taxableSalary*10/100
        return tax
    }
    else if(taxableSalary<=32333 && taxableSalary>=24001){
        const tax=taxableSalary*25/100
        return tax
    }
    else if(taxableSalary<=500000 && taxableSalary>=32334){
        const tax=taxableSalary*30/100
        return tax
    }
    else if (taxableSalary<=800000 && taxableSalary>=500001){
        const tax=taxableSalary*32.5
        return tax
    }
    else{
        const tax=taxableSalary*35/100
        return tax
    }

}


/* Net Salary*/
/* netSalary= grossSalary-(Net Paye+NSSF +SHIF)*/



const taxablePay = taxableSalary(grossSalary(5000, 600, 90), 40,679)
const tax= paye(taxablePay)
const netSalary=taxablePay-tax

console.log( netSalary)
