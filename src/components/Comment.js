import withObservables from '@nozbe/with-observables'

const Comment = ({ comment, author }) => (
  <div>
    <p>{comment.body} — by {author.name}</p>
  </div>
)

const enhance = withObservables(['comment'], ({ comment }) => ({
  comment, // shortcut syntax for `comment: comment.observe()`
  author: comment.author, // shortcut syntax for `comment.author.observe()`
}))

export default enhance(Comment)