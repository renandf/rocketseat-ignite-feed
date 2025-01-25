import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import styles from "./Post.module.css"

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Great post!'])
  const [newCommentText, setNewCommentText] = useState('')

  const formattedDate = format(publishedAt, "d LLLL 'at' HH:mm")

  const dateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  })

  function handleCreateNewComment(e) {
    // Prevent page refresh after form submission
    e.preventDefault()
    
    // Update state with new comment
    setComments([...comments, newCommentText])

    // Empty the text area by clearing the state
    setNewCommentText('')
  }

  function handleNewCommentChange(e) {
    // Gets the value of the textarea whenever it changes
    setNewCommentText(e.target.value)
  }

  function handleNewCommentInvalid(e) {
    console.log(e)
  }

  function deleteComment(commentToDelete) {
    const commentsAfterDeletion = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsAfterDeletion)
  }

  const isCommentEmpty = newCommentText.length === 0

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
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}

        <p>
          <a href="">#newproject</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea
          name="comment"
          placeholder="Write here..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button
            type="submit"
            disabled={isCommentEmpty}
          >
            Post Comment
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}