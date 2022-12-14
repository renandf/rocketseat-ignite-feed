import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Renan Castro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="3 Aug 2022, at 08:13h"
          dateTime="2022-08-03 08:13:30">
            1h ago
        </time>
      </header>

      <div className={styles.content}>
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>👉 <a href="">jane.design/doctorcare</a></p>
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