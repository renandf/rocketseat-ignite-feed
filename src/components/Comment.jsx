import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/renandf.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Renan Castro</strong>
              <time
                title="3 Aug 2022, at 08:13h"
                dateTime="2022-08-03 08:13:30">
                  1h ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Very good! Congratulations!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Kudos <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}