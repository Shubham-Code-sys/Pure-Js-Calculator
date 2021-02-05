alert(`You can control with your keyboard :)

Tip: Press Esc to clear all.`)

class Calculator{
    constructor(prevTyped, currentTyped){
        this.prevTyped = prevTyped
        this.currentTyped = currentTyped
        this.allClear()
    }

    allClear(){
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }
    
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.execute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    execute(){
        let results
        const previous = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(previous) || isNaN(current)) return
        switch(this.operation){
            case '+': 
                results = previous + current
                break
            case '-': 
                results = previous - current
                break
            case '*': 
                results = previous * current
                break
            case '/': 
                results = previous / current
                break
            default:
                return
        }
        this.currentOperand = results
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplay(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    }

    updateScreen(){
        this.currentTyped.innerText = 
        this.getDisplay(this.currentOperand)
        if (this.operation != null) {
            this.prevTyped.innerText = 
            `${this.getDisplay(this.previousOperand)} ${this.operation}` 
        }else{
            this.prevTyped.innerText = ''
        }
    }
}

const prevTyped = document.querySelector('[data-prev]');
const currentTyped = document.querySelector('[data-current]');
const operation = document.querySelectorAll('[data-operation]');
const numbersBtn = document.querySelectorAll('[data-number]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-all-clear]');

const calculator = new Calculator(prevTyped, currentTyped);

operation.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateScreen()
    })
})

numbersBtn.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateScreen()
    })
})

deleteBtn.addEventListener('click', () => {
    calculator.delete()
    calculator.updateScreen()
})

equalsBtn.addEventListener('click', () => {
    calculator.execute()
    calculator.updateScreen()
})

clearBtn.addEventListener('click', () =>{
    calculator.allClear()
    calculator.updateScreen()
})

document.addEventListener('keydown' , (e) => {
    if(e.key == 1){
        calculator.appendNumber(e.key)
        calculator.updateScreen()
    }else if(e.key == 2){
        calculator.appendNumber(e.key)
        calculator.updateScreen()
    }else if(e.key == 3){
        calculator.appendNumber(e.key)
        calculator.updateScreen()
    }else if(e.key == 4){
        calculator.appendNumber(e.key)
        calculator.updateScreen()
    }else if(e.key == 5){
        calculator.appendNumber(e.key)
        calculator.updateScreen()
    }else if(e.key == 6){
        calculator.appendNumber(e.key)
        calculator.updateScreen()
    }else if(e.key == 7){
        calculator.appendNumber(e.key)
        calculator.updateScreen()
    }else if(e.key == 8){
        calculator.appendNumber(e.key)
        calculator.updateScreen()
    }else if(e.key == 9){
        calculator.appendNumber(e.key)
        calculator.updateScreen()
    }else if(e.key == 0){
        calculator.appendNumber(e.key)
        calculator.updateScreen()
    }else if(e.key == `/`){
        calculator.chooseOperation(e.key)
        calculator.updateScreen()
    }else if(e.key == `*`){
        calculator.chooseOperation(e.key)
        calculator.updateScreen()
    }else if(e.key == `-`){
        calculator.chooseOperation(e.key)
        calculator.updateScreen()
    }else if(e.key == `+`){
        calculator.chooseOperation(e.key)
        calculator.updateScreen()
    }else if(e.key == `.`){
        calculator.appendNumber(e.key)
        calculator.updateScreen()
    }else if(e.key == `Enter`){
        calculator.execute()
        calculator.updateScreen()
    }else if(e.key == `Escape`){
        calculator.allClear()
        calculator.updateScreen()
    }else if(e.key == `Backspace`){
        calculator.delete()
        calculator.updateScreen()
    }
    else{
        console.log(e.key)
    }
})