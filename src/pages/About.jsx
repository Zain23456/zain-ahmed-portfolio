import styles from './About.module.css'

function About() {

  return (
    <>
      <main className={styles.body}>
        <h1>About</h1>
        <div className={styles.p}>
          <p>
            I'm a software engineer with a drive to bring your ideas to life. I enjoy learning new concepts to solve problems as efficiently as possible. My hobbies include beekeeping, walking, and cooking.
          </p>
        </div>
      </main>
    </>
  )
}

export default About