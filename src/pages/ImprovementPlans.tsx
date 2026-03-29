import { BlueprintPage } from '@/components/layout/blueprint-page'

export default function ImprovementPlans() {
  return (
    <BlueprintPage
      title="Area improvement plans"
      description="AI-generated, JSON-schema constrained plans with references, confidence, and execution tracking."
      sections={[
        {
          heading: 'Plan selector & timeline',
          bullets: [
            'Domain tabs: Finance, Ops, Leads, HR, Marketing',
            'Version history with diff-friendly change log',
          ],
        },
        {
          heading: 'Actions',
          bullets: [
            'Priority, assignee, due date, expected outcome',
            'WhatsApp deep links for field staff; webhook on completion',
          ],
        },
        {
          heading: 'AI explanation',
          bullets: [
            'Grounded rationale with pointers to source records',
            'User feedback loop to tune agent templates per vertical',
          ],
        },
      ]}
    />
  )
}
