export const todoGIFServiceReducer = (state = '', action) => {
  switch (action.type) {
      case 'Find_GIF':
          return action.imageUrl;
      default:
          return state;
  }
};