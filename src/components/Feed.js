import React from 'react'
import styled from 'styled-components'
import BeatLoader from "react-spinners/BeatLoader";
const moment = require('moment')

const Container = styled.div`
  padding: 20px;
`

const DisplayWsbPost = styled.div`
  border-bottom: 1px solid black;
  padding: 5px;
  margin: 10px;
  font-size: 10pt;
`

const WsbPost = (post, key) => (
  <DisplayWsbPost key={key} >
    <p>{post.body}</p>
    <small>{post.author} on {moment.unix(post.created_utc).format("MMMM Do YYYY, h:mm:ss a")}</small>
  </DisplayWsbPost>
)

const DisplayFeed = (feed) => (
  <div>
    {feed.map((post, index) => (
        WsbPost(post, index)
    ))}
  </div>
);

class Feed extends React.Component {
  constructor(props) {
    super(props)

    this.fetchData = this.fetchData.bind(this)
    this.beginPolling = this.beginPolling.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this.props.updateWsbFeed()
    this.beginPolling()
  }

  beginPolling() {
    setTimeout(this.fetchData, 15000)
  }

  render() {
    return(
      <Container>
        <h1>Feed</h1>
        {this.props.feed?.length >= 1 ? DisplayFeed(this.props.feed) : <BeatLoader size={20} color={"green"} />}
      </Container>
    )
  }
}

export default Feed