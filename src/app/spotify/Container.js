import { connect } from 'react-redux'
import { toggleEnrollmentSuccessModal } from './action'
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
        getImages: () => dispatch(getImages()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Spotify)
