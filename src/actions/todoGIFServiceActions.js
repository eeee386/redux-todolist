import axios from "axios/index";

export const findGIFAction = (newImageUrl) => ({
    type: 'Find_GIF',
    imageUrl: newImageUrl
});

export const findGIFRequest = async (text) => {
    let newImageUrl;
    await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=5af1dpHDnUoSnLBVS6HllccaUIjg4mAW&q=${text}&limit=1&offset=0&rating=G&lang=en`)
        .then(function (response) {
            if(response.data.data[0]){
                newImageUrl = response.data.data[0].images.original.url;
            } else {
                newImageUrl = '';
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    return newImageUrl;
};

export const findGIFThunk = (text) => {
    return function (dispatch) {
        return findGIFRequest(text).then(
            (newImageUrl) => {
                dispatch(findGIFAction(newImageUrl));
            },
            (error)=> {
                console.log(error);
            }
        )
    }

};