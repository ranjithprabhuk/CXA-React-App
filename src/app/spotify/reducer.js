import {types} from './action'

const defaultState = {
    isFetchingImages: false,
    images: [],
}

const spotifyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.toggleLoader: {
            return {...state, isFetchingImages: !state.isFetchingImages}
        }
        case types.setImages: {
            const images = state.images.concat(action.images)
            return {...state, images}
        }
        default: {
            return state
        }
    }
}

export default spotifyReducer