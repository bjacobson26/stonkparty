import React from 'react'
import styled from 'styled-components'
import BeatLoader from "react-spinners/BeatLoader";
import { Animated } from "react-animated-css";

const moment = require('moment')

const Container = styled.div`
  padding: 20px;
  height: 800px;
  overflow: scroll;
  border-radius: 3px;
`

const DisplayWsbPost = styled.div`
  border-bottom: 1px solid black;
  padding: 5px;
  margin: 10px;
  font-size: 10pt;
`

const WsbPostAuthor = styled.p`
  font-style: italic;
`

const WsbPost = (post, key) => (
  <DisplayWsbPost key={key} >
    <WsbPostAuthor>{post.author} said...</WsbPostAuthor>
    <p>{post.body}</p>
    <small>{moment.unix(post.created_utc).format("MMMM Do YYYY, h:mm:ss a")} on /r/wallstreetbets</small>
  </DisplayWsbPost>
)

const DisplayFeed = (feed) => (
  <div>
    {feed.map((post, index) => (
        <Animated animationIn={"zoomIn"} key={post.name}>
          {WsbPost(post, post.name)}
        </Animated>
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
      <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
        <Container>
          <h1>Feed</h1>
          {this.props.feed?.length >= 1 ? DisplayFeed(this.props.feed) : <BeatLoader size={20} color={"green"} />}
        </Container>
      </Animated>
    )
  }
}

export default Feed