import LoadingButton from '@/components/LoadButton';
import PromptForm from '../containers/PromptForm';

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 rounded-lg p-8 ">
          <h1 className="text-4xl font-bold mb-8 text-center">Open Chatty</h1>
          <h2 className="font-bold mb-8 text-center">
            Next.js and Server Sent Events (SSE)
          </h2>
          <p className="text text-center mb-8">
            Simple Next.js application demonstrating how to use server-sent
            events (SSE) with the OpenAI API. Start a conversation with OpenAI
            and see how the results are displayed in real-time.
          </p>
          <div className="flex justify-center">
            <PromptForm />
          </div>
        </div>
      </div>
    </main>
  );
}
