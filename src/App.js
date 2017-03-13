import React from 'react';

import babyBunBuns from '../data/bunnyimages';

import CreateBunnyForm from './NewBunnyForm';
import Selector from './Selector';
import View from './View';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewStyle: null,
      babyBunBuns: babyBunBuns,
    };
    this.handleClick = this.handleClick.bind(this);
    this.deleteBunny = this.deleteBunny.bind(this);
    this.addBunny = this.addBunny.bind(this);
  }

  handleClick(viewValue) {
    console.log(viewValue);
    this.setState({
      viewStyle: viewValue
    });
  }

  deleteBunny(babyBunIndex){
    let babyBunBunsFiltered = this.state.babyBunBuns.filter((element, i)=>{
      if (i !== babyBunIndex) {
        return element
      }
    });
    this.setState({
      babyBunBuns: babyBunBunsFiltered
    })
  }

  addBunny(newBunBun){
    let babyBunBunsMultiplied = this.state.babyBunBuns.concat(newBunBun);
    this.setState({
      babyBunBuns: babyBunBunsMultiplied
    })
  }

  render() {
    return (
      <div>
        <Selector 
          handleClick={this.handleClick}
        />
        <CreateBunnyForm 
          addBunny={this.addBunny}
        />
        <View 
          deleteBunny={this.deleteBunny} 
          babyBunBuns={this.state.babyBunBuns} 
          viewStyle={this.state.viewStyle}
        />
      </div>
    );
  }
}

