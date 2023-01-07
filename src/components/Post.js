import withObservables from '@nozbe/with-observables'
import Comment from 'components/Comment'

const Post = ({ post, comments }) => (
  <article>
    <h1>{post.name}</h1>
    <p>{post.body}</p>
    <h2>Comments</h2>
    {comments.map(comment =>
      <Comment key={comment.id} comment={comment} />
    )}
  </article>
)

const enhance = withObservables(['post'], ({ post }) => ({
  post,
  comments: post.comments, // Shortcut syntax for `post.comments.observe()`
}))

export default enhance(Post)