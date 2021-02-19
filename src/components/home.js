import React, { Component } from "react";
import CardInput from "../utils/card-input"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalInput: [0, 1, 2, 3],
            value: ''
        }
    }

    handleInputUpdate = (data) => {
        let { value } = this.state;
        if (value.length < 16) this.setState({ value: value + data })
    }

    detectDelete = (index, val) => {
        let text = '';
        let { totalInput, value } = this.state;
        let length = totalInput.length;
        for (let i = 0; i < length; i++)
            if (index == i) text += val;
            else text += value.substring((i * length), (i * length) + 4);

        this.setState({ value: text });
    }

    render() {
        let { totalInput, value } = this.state;
        return (
            <>
                <div className="cardInputTitle">Card Number*</div>

                <span>
                    {totalInput.map((index) => {
                        return <CardInput
                            index={index}
                            value={value}
                            handleInputUpdate={this.handleInputUpdate}
                            detectDelete={this.detectDelete}
                        />
                    })
                    }
                </span>
            </>
        );
    }
}
