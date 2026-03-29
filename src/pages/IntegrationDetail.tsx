import { useParams } from 'react-router-dom'

import { BlueprintPage } from '@/components/layout/blueprint-page'

export default function IntegrationDetail() {
  const { id } = useParams()
  return (
    <BlueprintPage
      title={`Integration ${id ?? '—'}`}
      description="Status, granted scopes, sync logs, manual sync, reconnect/disconnect, and sample payload preview."
      sections={[
        {
          heading: 'Health',
          bullets: [
            'Last successful sync timestamp',
            'Error classification with suggested fixes',
            'Manual “full refresh” with idempotent dedupe keys',
          ],
        },
        {
          heading: 'Logs',
          bullets: [
            'Paginated sync events with correlation IDs',
            'Export for support; redacted PII in shared links',
          ],
        },
      ]}
    />
  )
}
