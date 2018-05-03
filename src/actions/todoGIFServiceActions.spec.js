import {findGIFRequest, findGIFAction, findGIFThunk} from "./todoGIFServiceActions";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios/index';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe("todoActions test", ()=> {
    afterEach(() => {
      axiosMock.reset();
    });

    it("findGIFAction should be the right format", () => {
        const findGIF = findGIFAction("newImageUrl");
        expect(findGIF).toEqual({
            type: 'Find_GIF',
            imageUrl: "newImageUrl"
        });
    });
    it("FindGIFRequest should complete its promise", async () => {
            axiosMock.onGet(`https://api.giphy.com/v1/gifs/search?api_key=5af1dpHDnUoSnLBVS6HllccaUIjg4mAW&q=hello&limit=1&offset=0&rating=G&lang=en`)
                  .reply(200, {"data":[{
                                  "images": {
                                      "original":{
                                          "url": "https://media2.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif",
                                                  },
                                            }
                                          }
                                        ]});
            expect.assertions(1);
            const GIFUrl = await findGIFRequest("hello");
            expect(GIFUrl).toBe("https://media2.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif");
    });
    it("if FindGIFRequest fails its promise it should give an empty string back.", async() => {
            axiosMock.onGet(`https://api.giphy.com/v1/gifs/search?api_key=5af1dpHDnUoSnLBVS6HllccaUIjg4mAW&q=&limit=1&offset=0&rating=G&lang=en`)
                .reply(200, {"data":[],"pagination":{"total_count":0,"count":0,"offset":0}});
            expect.assertions(1);
            const GIFUrl = await findGIFRequest("");
            expect(GIFUrl).toBe("");
    });
    it("Calling FindGIFThunk and completing request it should dispatch the findGIFAction", () => {
        axiosMock.onGet(`https://api.giphy.com/v1/gifs/search?api_key=5af1dpHDnUoSnLBVS6HllccaUIjg4mAW&q=hello&limit=1&offset=0&rating=G&lang=en`)
        .reply(200, {"data":[{
                        "images": {
                            "original":{
                                "url": "https://media2.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif",
                                        },
                                  }
                                }
                              ]});
        const expectedAction = [{
          type: 'Find_GIF',
          imageUrl: "https://media2.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif"
        }];
        const store = mockStore({ todos: [] });
        return store.dispatch(findGIFThunk("hello")).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
          });
    });
});
