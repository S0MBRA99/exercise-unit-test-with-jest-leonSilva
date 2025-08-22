let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar){
    return Number(((dollar/oneEuroIs.USD)*oneEuroIs.JPY).toFixed(2))
}

function fromEuroToDollar(euro){
    return Number((euro*oneEuroIs.USD).toFixed(2))
}

function fromYenToPound(yen){
    return Number(((yen/oneEuroIs.JPY)*oneEuroIs.GBP).toFixed(2))
}


module.exports =  {fromDollarToYen,fromEuroToDollar,fromYenToPound} 

