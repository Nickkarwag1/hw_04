class Calculate {
    constructor(public num1: number, public num2: number, public operation: string, public expectedResult: number) {}

    getResult() {
        let result = 0;
        switch (this.operation) {
            case "+":
                result = this.num1 + this.num2;
                break;
            case "-":
                result = this.num1 - this.num2;
                break;
            case "*":
                result = this.num1 * this.num2;
                break;
            case "/":
                result = this.num1 / this.num2;
                break;
            default:
                throw Error("Options available: +, -, *, /.");
                break;
        }
        result === this.expectedResult
            ? console.log(`Actual result: ${result} equal expected result: ${this.expectedResult} => Test passed!`)
            : console.log(`Actual result: ${result} not equal expected result: ${this.expectedResult} => Test failed!`);
    }
}

new Calculate(2, 2, "+", 4).getResult();
new Calculate(2, 2, "+", 5).getResult();
new Calculate(4, 2, "-", 2).getResult();
new Calculate(4, 2, "-", 4).getResult();
new Calculate(5, 3, "*", 15).getResult();
new Calculate(5, 3, "*", 20).getResult();
new Calculate(20, 5, "/", 4).getResult();
new Calculate(20, 5, "/", 10).getResult();
new Calculate(50, 30, "+", 80).getResult();
new Calculate(240, 2, "*", 120).getResult();
