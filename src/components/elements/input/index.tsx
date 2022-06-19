import React, { Component } from 'react';
import BasicInput from './BasicInput';

const OInputType = {
  basic: 'BASIC',
} as const;

type InputType = typeof OInputType[keyof typeof OInputType];

export interface InputProps {
  inputType: InputType;
  onChange?: Function;
}

class Input extends Component<InputProps> {
  renderElement(props: InputProps) {
    switch (props.inputType) {
      case OInputType.basic:
        return <BasicInput />;
      default:
        console.error('Input Props 확인');
    }
  }

  render() {
    return this.renderElement(this.props);
  }
}

export default Input;
