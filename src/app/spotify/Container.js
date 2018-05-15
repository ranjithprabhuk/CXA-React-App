import { connect } from 'react-redux'
import { getImages } from './action'
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Spotify)
