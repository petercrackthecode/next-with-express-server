import { withPageAuthRequired } from "@auth0/nextjs-auth0"

function Profile({ data }) {
  return (
    <div>
      <h1>Data id: {data.id}</h1>
      <p>Data content: {data.content}</p>
      <button>
        <a href="/api/auth/logout">Logout</a>
      </button>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }]
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = {
    id: params.id.toString(),
    content: "Peter Nguyen",
  }

  return {
    props: {
      data,
    },
  }
}

export default withPageAuthRequired(Profile)
