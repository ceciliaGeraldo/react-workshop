import React, { Component } from 'react';
import todoListService from '../service/todoList';

const withTodoListService = (WrappedComponent, listName) => {
  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        list: todoListService.getList(listName)
      };
      this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e, id) {
      e.preventDefault();
      todoListService.updateItem(listName, id);
      setTimeout(() => {
        this.setState({ list: todoListService.getList(listName) });
      }, 10);
    }

    render() {
      const forwardProps = {
        name: listName,
        handler: this.onChangeHandler,
        list: this.state.list,
        ...this.props,
      };
      return <WrappedComponent {...forwardProps}/>;
      // return <WrappedComponent 
      //   name={forwardProps.name}
      //   handler={forwardProps.handler}
      //   list={forwardProps.list}
      // />;
    }
  }

  return Wrapper;
}

export default withTodoListService;