import { BlueprintPage } from '@/components/layout/blueprint-page'

export default function AgentTraining() {
  return (
    <BlueprintPage
      title="Agent training status"
      description="Background jobs, embeddings health, ingest timestamps, downloadable logs."
      sections={[
        {
          heading: 'Jobs',
          bullets: [
            'Chunking, embedding, vector upsert with schema version tags',
            'Idempotent replays; DLQ for poison payloads',
          ],
        },
        {
          heading: 'Metrics',
          bullets: [
            'Index size, latency p95, drift alerts on embedding model changes',
            'Manual retrain with audit log entry',
          ],
        },
      ]}
    />
  )
}
