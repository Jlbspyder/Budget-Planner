export default (state, action) => {
    switch(action.type) {
      case 'DELETE':
        return {
          ...state,
          activities: state.activities.filter(activity => activity.id !== action.payload)
        }
      case 'ADD':
        return {
          ...state,
          activities: [action.payload, ...state.activities]
        }
      default:
        return state;
    }
  }