'use client'

import {useEffect, useState} from 'react'
import { QuestionTemplate } from '@/components/QuestionTemplate'
import { AnswerTemplate } from '@/components/AnswerTemplate'
import axios from "axios";

export default function Home() {
  const [currentResource, setCurrentResource] = useState("")
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [currentMatrix, setCurrentMatrix] = useState([])
  const [currentId, setCurrentId] = useState(0)

    const getAnswer = async (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");

        const raw = JSON.stringify({
            "symptom": data
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://127.0.0.1:8000/get_disease", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const resultJson = JSON.parse(result)
                setCurrentResource(resultJson.ResourceType)
                setCurrentAnswer(resultJson.Value)
                setCurrentMatrix(resultJson.CurrentMatrix)
                setCurrentId(resultJson.Id)

                console.log(resultJson.ResourceType)
            })
            .catch((error) => console.error(error));
    }

  useEffect(() => {
    getAnswer({})
  }, [])

  const handleAnswer = (answer: 'Yes' | 'No') => {
    let temp_matrix
    if (answer === 'Yes') {
        temp_matrix = Object.assign({[currentId]:1}, currentMatrix)
    } else {
        temp_matrix = Object.assign({[currentId]:0}, currentMatrix)
    }
    console.log(temp_matrix)
    getAnswer(temp_matrix)
  }

  const handleNextQuestion = () => {
    getAnswer({})
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Medical Questionnaire</h1>
      {currentResource == "Answer" ? (
        <div className="space-y-4">
          <AnswerTemplate disease={currentAnswer} />
          <button 
            onClick={handleNextQuestion}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Close
          </button>
        </div>
      ) : (
        <QuestionTemplate question={currentAnswer} onAnswer={handleAnswer} />
      )}
    </main>
  )
}

