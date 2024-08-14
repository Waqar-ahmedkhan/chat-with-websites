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
  try {
    const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstractedUrl);
    console.log("isalreadyindexed", isAlreadyIndexed);
    const sessionId = "mock-session"

    if (!isAlreadyIndexed) {
      await ragChat.context.add({
        type: "html",
        source: reconstractedUrl,
        config: { chunkOverlap: 50, chunkSize: 200 },
      });
      await redis.sadd("indexed-urls", reconstractedUrl);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }

  return <ChatWrapper/>
};

export default page;
