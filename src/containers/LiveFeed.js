import { connect } from 'react-redux'
import Feed from '../components/Feed'
import { updateWsbFeed } from '../actions'
import fetch from 'node-fetch'
import { STONKS_API_URL } from '../constants'

const getVisibleFeed = (feed) => {
  // could eventually add filters here
  return feed
}

const mapStateToProps = state => {
  return {
    feed: getVisibleFeed(state.feed)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateWsbFeed: () => {
      fetch(`${STONKS_API_URL}/wsbFeed`)
        .then(response => response.json())
        .then((feedData) => {
          dispatch(updateWsbFeed(feedData))
        })
    }
  }
}

const LiveFeed = connect(mapStateToProps, mapDispatchToProps)(Feed)

export default LiveFeed