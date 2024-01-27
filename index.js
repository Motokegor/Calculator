class Calculator {
  constructor() {
      this.firstNum = document.querySelector('.first-num');
      this.secondNum = document.querySelector('.second-num');
      this.operation = document.getElementById('operation');
      this.resultBox = document.querySelector('.result');
      this.button = document.querySelector('button');
      this.button.addEventListener('click', () => this.calculate());
  }

  calculate() {
      const x = Number(this.firstNum.value);
      const z = Number(this.secondNum.value);
      const selectedOperation = this.operation.value;

      switch (selectedOperation) {
          case '+':
              this.plus(x, z);
              break;
          case '-':
              this.minus(x, z);
              break;
          case '*':
              this.multiplication(x, z);
              break;
          case '/':
              this.division(x, z);
              break;
      }
  }

  plus(x, z) {
      const resultNum = document.createElement('h3');
      resultNum.textContent = x + z;
      this.clearResultBox();
      this.resultBox.appendChild(resultNum);
  }

  minus(x, z) {
      const resultNum = document.createElement('h3');
      resultNum.textContent = x - z;
      this.clearResultBox();
      this.resultBox.appendChild(resultNum);
  }

  multiplication(x, z) {
      const resultNum = document.createElement('h3');
      resultNum.textContent = x * z;
      this.clearResultBox();
      this.resultBox.appendChild(resultNum);
  }

  division(x, z) {
      const resultNum = document.createElement('h3');
      resultNum.textContent = x / z;
      this.clearResultBox();
      this.resultBox.appendChild(resultNum);
  }

  clearResultBox() {
      this.resultBox.textContent = '';
  }
}

const calculator = new Calculator();