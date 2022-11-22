import React from "react";

class HelloWorld extends React.Component {
    render() {
        const numbers = {
            num1: 10,
            num2: 20,
            result: 0
        }
        let { num1, num2, result } = numbers;
        result = num1 + num2;

        return <span className="HelloWorld">O resultado de {num1} + {num2} = {result}</span>
    }
}

export default HelloWorld;