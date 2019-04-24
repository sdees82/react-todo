import React, { Component } from 'react';
import Form from '../component/Form/Form';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      completed: 0,
      currentInput: "Add items",
      listItems: [],
      percentage: `0`,
      numOfTasks: 0,
    }
  }


  //Captures current state of input field
  inputChange = (e) =>{
    this.setState({currentInput: e.target.value});
  }

  //Add tasks to list
  addListItem = (e) => {
    e.preventDefault();
    if(this.state.currentInput.length > 0 && this.state.currentInput !== 'Add items'){
    let currentListItems = this.state.listItems;
    currentListItems.push({value: this.state.currentInput, done: false});
      this.setState({listItems: currentListItems, numOfTasks: this.state.numOfTasks + 1}, function () {
        this.getProgressPercentage();
    });
    }
  }

  //Removes tasks from list
  removeItem = (i) =>{
    const ItemToRemove = [];
    // map through list items, find and remove deleted item and return a new list of items
    const filteredState = this.state.listItems.filter((val, index) =>{
      if(index === i){
        ItemToRemove.push(val);
      }
      return index !== i;
    });
    
    //update list items minus deleted item. if there's only one task left, clear completed task also
    if(this.state.numOfTasks === 1){
      this.setState({listItems: filteredState, numOfTasks: this.state.numOfTasks - 1, completed: 0}, function () {
        this.getProgressPercentage();
    });
    }
    //if the deleted task was completed, decrement compeleted task by one, otherwise just update the list items and decrement the number of tasks
    else{
      if(ItemToRemove[0].done === true){
        this.setState({listItems: filteredState, numOfTasks: this.state.numOfTasks - 1, completed: this.state.completed - 1}, function () {
          this.getProgressPercentage();
      });
      }else{
        this.setState({listItems: filteredState, numOfTasks: this.state.numOfTasks - 1}, function () {
          this.getProgressPercentage();
      });
      }
  
    }

    
  
  }

  //Filter through the list to find the completed/uncompleted list item and set state accordingly.
  getCompletedItem = (i) =>{
    let currentListItems = this.state.listItems;
    let getCompletedItem = currentListItems.filter((val, index) =>{
      return index === i;
    });

    if(getCompletedItem[0].done === true){
      getCompletedItem[0].done  = false;
    }else{
      getCompletedItem[0].done = true;
    }
    currentListItems[i] = getCompletedItem[0];
    

    if(getCompletedItem[0].done === false){

      this.setState({listItems: currentListItems, completed: this.state.completed - 1}, function () {
        this.getProgressPercentage();
    });
    }else{
      this.setState((state) => {
        return {listItems: currentListItems, completed: state.completed + 1};
      });
      this.setState({listItems: currentListItems, completed: this.state.completed + 1}, function () {
        this.getProgressPercentage();
    });
    }
  }

  //Clears input field on focus
  clearFocus = (e) =>{
    this.setState({currentInput: ""});
  }

//updates progress bar based on the number of tasks which were completed
  getProgressPercentage = () =>{
    const completedPercentage = Math.floor((100 * this.state.completed) / this.state.numOfTasks);
    this.setState({percentage: completedPercentage});
  }

  render() {
    return (
      <div className="App">
        <Form 
            addListItem={this.addListItem}
            clearFocus={this.clearFocus}
            completed={this.state.completed}
            currentInput={this.state.currentInput}
            getCompletedItem={this.getCompletedItem}
            inputChange={this.inputChange} 
            listItems={this.state.listItems}
            numOfTasks={this.state.numOfTasks}
            percentage={this.state.percentage}
            removeItem={this.removeItem}/>
      </div>
    );
  }
}

export default App;
