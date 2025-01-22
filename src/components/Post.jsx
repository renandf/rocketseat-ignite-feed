import { format, formatDistanceToNow } from 'date-fns'

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import styles from "./Post.module.css"

export function Post({ author, publishedAt, content }) {
  const formattedDate = format(publishedAt, "d LLLL 'at' HH:mm")

  const dateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={formattedDate}
          dateTime={publishedAt.toISOString()}>
            {dateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href='#'>{line.content}</a></p>
          }
        })}
        
        <p>
          <a href="">#newproject</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea
          placeholder="Write here..."
        />

        <footer>
          <button type="submit">Post Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}