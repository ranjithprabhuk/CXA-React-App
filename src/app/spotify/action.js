export const types = {
    toggleLoader: 'spotify/TOGGLE_LOADER',
    getImages: 'spotify/GET_IMAGE_LIST',
}

export const getImages = (images) => {
    return {
        type: types.getImages,
        images,
    }
}