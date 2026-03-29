import { BlueprintPage } from '@/components/layout/blueprint-page'

export default function AgentConfig() {
  return (
    <BlueprintPage
      title="Agent configuration & training"
      description="Dataset toggles, persona, retention windows, and manual retrain triggers."
      sections={[
        {
          heading: 'Data scope',
          bullets: [
            'Include/exclude Gmail threads, Drive folders, WhatsApp numbers',
            'KB entries and interview transcripts with redaction rules',
          ],
        },
        {
          heading: 'Persona & safety',
          bullets: [
            'Tone presets per vertical (HVAC vs cleaning)',
            'Blocklists and escalation to human for high-risk topics',
          ],
        },
      ]}
    />
  )
}
