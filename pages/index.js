import Layout from '../components/layout';
import Post from '../components/post'

export default class Index extends React.Component {

  static async getInitialProps({ query }) {

    const posts = await Post.fetch();
    return { posts };
  }

  render() {
    return (
      <Layout title='Posts'>
        <h1 className="heading">Hi, I'm Patrick</h1>

        <p>Check out these posts and things.</p>
        <div>{this.props.posts.map(p => <Post post={p} />)}</div>
      </Layout>
    )
  }
};
