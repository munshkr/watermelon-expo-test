import { Model } from '@nozbe/watermelondb'
import { relation, immutableRelation, field, writer } from '@nozbe/watermelondb/decorators'

export default class Comment extends Model {
  static table = 'comments'
  static associations = {
    posts: { type: 'belongs_to', key: 'post_id' },
  }

  @relation('posts', 'post_id') post
  @immutableRelation('users', 'author_id') author
  @field('is_spam') isSpam

  @writer async markAsSpam() {
    await this.update(comment => {
      comment.isSpam = true
    })
  }
}