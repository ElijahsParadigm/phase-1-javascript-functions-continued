// code your solution here

function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
}

saturdayFun('go ice-skating')

const mondayWork = function(monday = "go to the office"){
    return(`This Monday, I will ${monday}.`)
}

function wrapAdjective(name = "*"){
    return function (feelings = "special"){
        return (`You are ${name}${feelings}${name}!`)
    }
}