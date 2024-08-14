import ChatWrapper from "@/components/ChatWrapper";
import { ragChat } from "@/lib/Rag-Chat";
import { redis } from "@/lib/redis";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

function reConstractUrl({ url }: { url: string[] }) {
  const decodedComponent = url.map((component) => {
    return decodeURIComponent(component);
  });

  return decodedComponent.join('/');
}

const page = async ({ params }: PageProps) => {
  const reconstractedUrl = reConstractUrl({ url: params.url as string[] });
  const sessionId = "mock-session"

    const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstractedUrl);
    console.log("isalreadyindexed", isAlreadyIndexed);
    
    if (!isAlreadyIndexed) {
      await ragChat.context.add({
        type: "html",
        source: reconstractedUrl,
        config: { chunkOverlap: 50, chunkSize: 200 },
      });
      await redis.sadd("indexed-urls", reconstractedUrl);
    }


   
  


  return <ChatWrapper sessionId={sessionId} />
}

export default page;
