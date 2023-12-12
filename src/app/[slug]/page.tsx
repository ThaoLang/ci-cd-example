require('dotenv').config()

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` }
}

export default function Page({ params }: Params) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>{process.env.SECRET}</p>
      <p>Dieu Thuong</p>
      <p>Wellcome to Hanoi</p>
    </>
  )
}
