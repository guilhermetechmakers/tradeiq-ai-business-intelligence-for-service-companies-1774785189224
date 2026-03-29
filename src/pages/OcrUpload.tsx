import { Upload } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function OcrUpload() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="OCR document upload"
        description="Drag/drop or camera capture, extraction progress, field mapping, save to Documents for RAG."
      />
      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center gap-4 py-16">
          <Upload className="h-10 w-10 text-primary" aria-hidden />
          <p className="text-sm text-muted-foreground">
            Drop invoices or work orders (PDF / image). Demo UI — wire Storage + Edge OCR.
          </p>
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="file">Choose file</Label>
            <Input id="file" type="file" accept="image/*,application/pdf" />
          </div>
          <Button type="button">Upload & extract</Button>
        </CardContent>
      </Card>
    </div>
  )
}
