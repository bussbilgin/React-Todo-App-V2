import axios from "axios";

const apiUrl = "http://localhost:5000/todos";

// CRUD Service Example

const todoService = {
  getTodos() {
    return axios.get(apiUrl).then((response) => {
      return response.data;
    });
  },

  //   Fetch example

  //   getTodos() {
  //     return fetch(apiUrl).then((response) => {
  //       return response.json();
  //     });
  //   },

  addTodos(todoText) {
    return axios.post(apiUrl, { text: todoText }).then((response) => {
      return response.data;
    });
  },

  deleteTodos(id) {
    return axios.delete(`${apiUrl}/${id}`).then((response) => {
      return response.data;
    });
  },

  editTodos(id, newTodo) {
    return axios.put(`${apiUrl}/${id}`, newTodo).then((response) => {
      return response.data;
    });
  },
};

export default todoService;
