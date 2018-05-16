import axios from 'axios';
import * as apiConfig from '../../services/apiConfig';

export const types = {
    toggleLoader: 'spotify/TOGGLE_LOADER',
    setImages: 'spotify/SET_IMAGE_LIST',
    resetImages: 'spotify/RESET_IMAGES',
    updateFavorites: 'spotify/UPDATE_FAVOURITES',
}

export const getImages = (pageNo, imagesPerPage, searchText='') => {
    const url = `${apiConfig.default.api}&page=${pageNo}&per_page=${imagesPerPage}&text=${searchText}`;
    return async (dispatch) => {
        if (pageNo === 1) {
            dispatch(toggleLoader())
            dispatch(resetImages())
        }
        axios.get(url)
            .then(res => {
                if (res && res.status === 200) {
                    if (res.data && res.data.stat === 'ok') {
                        dispatch(setImages(res.data.photos.photo))
                    } else if (res.message) {
                        console.log('message >>', res.message)
                    }
                }
                if (pageNo === 1) {
                    dispatch(toggleLoader())
                }
            }).catch(err => {
                toggleLoader()
                console.log('rerrrrrrrr', res)
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

const resetImages = () => {
    return {
        type: types.resetImages,
    }
}

const toggleLoader = () => {
    return {
        type: types.toggleLoader,
    }
}