"use client"
import React from 'react'
import { Card, CardContent, CardTitle } from '../ui/card';
import { Button } from '../ui/button';


const DisplayQuestion = ({questions}:{
    questions: {
        id: string;
        question: string;
        difficulty: string;
        modelId: string;
    }[]
}) => {
    const [questionIndex, setQuestionIndex] = React.useState(0)
  return (
   <>
   <Card className='mt-10 font-bold flex items-center h-40 w-3/4 '>
    <CardContent>
        <CardTitle >Todays Question</CardTitle>
        <div>
            {questions[questionIndex].question}
        </div>
    </CardContent>
   </Card>
   <Button  onClick={() =>{
         if(questionIndex === questions.length - 1){
              setQuestionIndex(0)
         }else{
              setQuestionIndex(questionIndex + 1)
         }
   }}>Next Question</Button>
  
   </>
  )
}

export default DisplayQuestion