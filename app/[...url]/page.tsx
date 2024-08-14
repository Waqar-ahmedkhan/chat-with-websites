import { ragChat } from "@/lib/Rag-Chat"

interface PageProps {
    params: {
        url: string | string[] | undefined,
    }
}

function reConstractUrl({url}:{url: string[]}) {
  const decodedComponent = url.map((component)=> {
     decodeURIComponent(component)
  }) 

  return decodedComponent.join('/')
}
const page = async ({params}: PageProps) => {
  const reconstractedUrl = reConstractUrl({url: params.url as string[]})
  await ragChat.context.add({
    type: "html",
    source: reconstractedUrl,
    config: { chunkOverlap: 50, chunkSize: 200},
  })
    console.log(params);
  return (
    <div>hello</div>
  )
}

export default page