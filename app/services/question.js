import _ from 'lodash';
import { parse } from 'mathjs'

const operators = ["+", "-", "*", "/"];

// pickRandomNumber()
const randomNumber = () => _.random(0 , 50);

// pickRandomSign()
const randomOperator = () => operators[_.random(0, operators.length - 1)]

// createQuestion()
export const getQuestion = () => {
    const numberOne = randomNumber();
    const numberTwo = randomNumber();
    const operator = randomOperator();
    const parser = parse(`${numberOne} ${operator} ${numberTwo}`);
    const answer = parser.evaluate();
    const options = generateOptions(operator, answer);
    const question = `${numberOne} ${operator === "*" ? "x" : operator} ${numberTwo}`;
    
    return ({
        question,
        answer,
        options
    })
}

// createOptions()
const generateOptions = (operator, answer) => {
    let options = []
    let isDivide = operator === "/";
    let index = _.random(3);
    options[index] = isDivide ? _.round(answer,2) : answer
    for(let i =0; i < 4; i++){
        if(i != index){
            options[i] = isDivide ? _.round(parse(`${randomNumber()} ${operator} ${randomNumber()}`).evaluate(), 2) : parse(`${randomNumber()} ${operator} ${randomNumber()}`).evaluate()
        } 
    }
    return options;
}

// checkResult()
export const checkResult = (answer, value) => answer === value


