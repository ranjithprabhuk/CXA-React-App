import { connect } from 'react-redux'
import { getImages, updateFavorites } from './action'
import Spotify from './'

const mapStateToProps = (state) => {
    const { isFetchingImages, images } = state.spotify
    return {
        isFetchingImages,
        images,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: (pageNo, imagesPerPage) => dispatch(getImages(pageNo, imagesPerPage)),
        updateFavorites:(index) => dispatch(updateFavorites(index)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Spotify)
