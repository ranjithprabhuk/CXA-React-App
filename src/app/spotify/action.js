import axios from 'axios';
import * as apiConfig from '../../services/apiConfig';

export const types = {
    toggleLoader: 'spotify/TOGGLE_LOADER',
    setImages: 'spotify/SET_IMAGE_LIST',
    updateFavorites: 'spotify/UPDATE_FAVOURITES',
}

export const getImages = (pageNo, imagesPerPage) => {
    const url = `${apiConfig.default.api}&page=${pageNo}&per_page=${imagesPerPage}`;
    return async (dispatch) => {
        axios.get(url)
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

export const updateFavorites = (index) => {
    return {
        type: types.updateFavorites,
        index,
    }
}