import { connect } from 'react-redux'
import { getImages } from '../spotify/action'
import Carousel from './'

const mapStateToProps = (state) => {
    const { images } = state.spotify
    return {
        images,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: (pageNo, imagesPerPage, searchText) => dispatch(getImages(pageNo, imagesPerPage, searchText)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Carousel)
