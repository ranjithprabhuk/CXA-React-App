import { connect } from 'react-redux'
import { getImages } from '../spotify/action'
import Carousel from './'

const mapStateToProps = (state) => {
    return {
        images: state.spotify.images,
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
