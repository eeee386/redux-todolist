import {todoGIFServiceReducer} from './todoGIFServiceReducer';

describe("todoGIFServiceReducerTest", () => {
    it('should return the initial state', () => {
        expect(todoGIFServiceReducer(undefined, {})).toEqual('');
      });
    it('should handle Find_GIF', () => {
        expect(todoGIFServiceReducer('', {type: "Find_GIF", imageUrl: "ayylmao"})).toEqual("ayylmao");
    })
})
