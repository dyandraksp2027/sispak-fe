import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AnswerTemplateProps {
  disease: string;
}

export function AnswerTemplate({ disease }: AnswerTemplateProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Diagnosis Result</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-medium mb-2">You are diagnosed with:</p>
        <p className="text-xl font-bold text-red-600">
          {disease}
        </p>
      </CardContent>
    </Card>
  )
}

