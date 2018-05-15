import {types} from './action'

const defaultState = {
    isFetchingImages: false,
    images: [],
}

const spotifyReducer = (state = defaultState, action) => {
    console.log('adad', action)
    switch (action.type) {
        case types.toggleLoader: {
            return {...state, isFetchingImages: !state.isFetchingImages}
        }
        case types.setImages: {
            return {...state, images: action.images}
        }
        default: {
            return state
        }
    }
}

export default spotifyReducer