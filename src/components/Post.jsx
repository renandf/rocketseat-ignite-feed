import styles from "./Post.module.css"

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/renandf.png" />
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
    </article>
  )
}