import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface QuestionTemplateProps {
  question: string;
  onAnswer: (answer: 'Yes' | 'No') => void;
}

export function QuestionTemplate({ question, onAnswer }: QuestionTemplateProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Question</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-medium mb-4">Did you have {question}?</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => onAnswer('Yes')}>Yes</Button>
        <Button onClick={() => onAnswer('No')} variant="outline">No</Button>
      </CardFooter>
    </Card>
  )
}

