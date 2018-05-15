import axios from 'axios';
import * as apiConfig from '../../services/apiConfig';

export const types = {
    toggleLoader: 'spotify/TOGGLE_LOADER',
    setImages: 'spotify/SET_IMAGE_LIST',
}

export const getImages = () => {
    return async (dispatch) => {
        axios.get(apiConfig.default.api)
            .then(res => {
                console.log('redd', res)
            }).catch(err => {
                console.log('rerrrrrrrr', res);
            })
    }
};

export const setImages = (images) => {
    return {
        type: types.setImages,
        images,
    }
}