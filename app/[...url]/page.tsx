import { ChatWrapper } from "@/components/ChatWrapper";
import { ragChat } from "@/lib/Rag-Chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

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
  const sessionCookie = cookies().get('sessionId')?.value;
  const reconstractedUrl = reConstractUrl({ url: params.url as string[] });
  const sessionId = ( reconstractedUrl + "--" + sessionCookie).replace(/\//g, "");	

    const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstractedUrl);
    const initialMessages = await ragChat.history.getMessages({amount:10, sessionId})
    
    if (!isAlreadyIndexed) {
      await ragChat.context.add({
        type: "html",
        source: reconstractedUrl,
        config: { chunkOverlap: 50, chunkSize: 200 },
      });
      await redis.sadd("indexed-urls", reconstractedUrl);
    }

  return <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
}

export default page;
