import Image from '../assets/myPhoto.jpg'

function Home() {

  return (
    <div>
      <h1>Zain Ahmed</h1>
      <img src={Image} alt='Zain Ahmed'/>
      <p>Software Engineer</p>
    </div>
  )
}

export default Home