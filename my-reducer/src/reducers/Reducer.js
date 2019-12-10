export const todo = [
  {
    item: "Create Resume",
    completed: false,
    id: 1
  }
];

export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case "TOGGLE_COMPLETED":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case "CLEAR_TODO_ITEM":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

// STEP 1 - Build a simple reducer and initial state
// In a folder called reducers add a reducer file and build out a simple reducer with just a default return for now
// In the same file, build your initial state object that has a list of todos with the following shape:
// {
//   item: 'Learn about reducers',
//   completed: false,
//   id: 3892987589
// }
// Export both the reducer and the initial state object
