import 'isomorphic-fetch'
import Markdown from 'react-markdown'
import React from 'react'

const Post = props =>
  <div>
    <h1 className="title">{props.title}</h1>
    <time className="date" dateTime={props.date}>{props.date}</time>
    <Markdown source={props.body} />
  </div>

class PostContainer extends React.Component {
  static async fetch() {
    const res = await fetch('<yourHost?/api/v1/posts')
    const json = await res.json()
    return json ? json.data : {}
  }
  render() {
    return <Post {...this.props.post} />
  }
}

export default PostContainer
