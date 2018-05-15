import axios from 'axios';
import * as apiConfig from '../../services/apiConfig';

export const types = {
    toggleLoader: 'spotify/TOGGLE_LOADER',
    setImages: 'spotify/SET_IMAGE_LIST',
}

export const getImages = (pageNo, imagesPerPage) => {
    return async (dispatch) => {
        axios.get(apiConfig.default.api)
            .then(res => {
                if (res && res.status === 200) {
                    if (res.data && res.data.stat === 'ok') {
                        dispatch(setImages(res.data.photos.photo))
                    } else if (res.message) {
                        console.log('message >>', res.message);
                    }
                }
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