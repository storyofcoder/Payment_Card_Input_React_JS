import React, { Component } from "react";

export default class CardInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            focus: (props.index == 0) ? true : false
        }
    }

    componentWillReceiveProps = (props) => {
        this.updateInputValue(props.value);
    }

    updateInputValue = (value) => {
        let input = value.substring((4 * this.props.index), (4 * this.props.index) + 4);
        this.setState({ value: input, focus: input ? true : false });
    }

    detectDelete = (e) => {
        let { value } = this.state;
        if (value.length > e.target.value.length) this.props.detectDelete(this.props.index, e.target.value);
        else {
            if (e.target.value.length == value.length + 1)
                this.props.handleInputUpdate(e.target.value[e.target.value.length - 1]);
            else {
                this.props.handleInputUpdate(e.target.value.substring(value.length, 16));
            }
        }
    }

    render() {
        let { value, focus } = this.state;

        return (
            <input
                type="number" value={value}
                className="cardInputs"
                onChange={this.detectDelete}
                ref={input => input && focus && input.focus()}
            />
        );
    }
}
