import React from 'react';

import CreateBunnyForm from './CreateBunnyForm';
import Selector from './Selector';
import View from './View';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewStyle: null,
      babyBunBuns: [],
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

  deleteBunny(babyBunIndex, _id){
    fetch(`http://localhost:8000/bunniess/${_id}`, {method: 'DELETE'})
      .then(res => res.json())
      .then(res => {
          if(res.message) {
            //res.message;
            let babyBunBunsFiltered = this.state.babyBunBuns.filter((element, i)=>{
                if (i !== babyBunIndex) {
                    return element
                }
            });
            this.setState({
                babyBunBuns: babyBunBunsFiltered
            })
        }
    })
  }

  addBunny(newBunBun){
    fetch('http://localhost:8000/bunnies', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newBunBun)
    })
      .then(res => res.json())
      .then(res => {
          delete res.__v;
          let babyBunBunsMultiplied = this.state.babyBunBuns.concat(res);
          this.setState({
              babyBunBuns: babyBunBunsMultiplied
          })
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

  componentDidMount(){
    fetch('http://localhost:8000/bunnies')
      .then(res => res.json())
      .then(bunbuns => {
        this.setState(
          {babyBunBuns: bunbuns}
        )
      })
  }
}

