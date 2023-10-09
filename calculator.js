class Calculator {

    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }

    operate(num1, num2, operator) {
        switch(operator) {
            case 'A':
                return this.add(num1, num2);
            
            case 'S':
                return this.subtract(num1, num2);
            
            case 'M':
                return this.multiply(num1, num2);
            
            case 'D':
                return this.divide(num1, num2);
                
        }
    }
}