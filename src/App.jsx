import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post} from "./Post"

import styles from "./App.module.css"

import "./global.css"

export function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Renan Castro"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus velit explicabo. Necessitatibus nulla dolorum ex facere modi sit, provident repellat magnam aperiam excepturi hic ipsam ad assumenda et similique!"
          />
          <Post
            author="Diego Fernandes"
            content="Esse é um outro post."
          />
        </main>
      </div>
    </>
  )
}