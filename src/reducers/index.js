export default function firstState(initialState = [], action) {
    switch (action.type) {
  
      case 'FIRST':
              return "my first object" + action.payload
      default:
        return initialState;
    }
  }