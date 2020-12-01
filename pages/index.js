import Person from "./Component/Person";

export default function index({ data }) {

  console.log(data);

  return (
    <div>
      <h1>testing</h1>
      {
        data.map(item => (
          <Person key={item.id} name={item.name} url={item.url} />
        ))
      }
    </div>
  )
}

export const getStaticProps = async () => {

  const res = await fetch('https://api.imgflip.com/get_memes')
  const files = await res.json()

  return {
    props: {
      data: files.data.memes
    }
  }
}