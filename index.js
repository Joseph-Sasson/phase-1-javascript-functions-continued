// Your code here
function saturdayFun(event = 'roller-skate'){
  return `This Saturday, I want to ${event}!`
}

function mondayWork(event = 'go to the office'){
  return `This Monday, I will ${event}.`
}

function wrapAdjective(flair = '*'){
  return function func(word = 'special'){
    return `You are ${flair}${word}${flair}!`
  }
}