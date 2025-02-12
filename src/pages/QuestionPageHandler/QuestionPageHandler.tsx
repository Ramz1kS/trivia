import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './QuestionPageHandler.module.css'
import axios from 'axios'
import LoadingPage from '../LoadingPage/LoadingPage'
import ErrorPage from '../ErrorPage/ErrorPage'
import { question, fetchData } from '../../types'
import QuestionPage from '../QuestionPage/QuestionPage'

const QuestionPageHandler = () => {
  const { count, category, diff, type } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [responseCode, setResponseCode] = useState(5)
  const [questions, setQuestions] = useState<question[]>([])
  async function getQuestions() {
    // Отправляем запросиус КРИИИИД
    try {
      let url = "https://opentdb.com/api.php?amount=" + count
      if (type != 'any')
        url += "&type=" + type
      if (diff != "any")
        url += "&difficulty=" + diff
      if (Number(category) != 0 && Number(category) != 8)
        url += "&category=" + category
      url += "&encode=url3986"
      const response = await axios.get<fetchData>(url)
      if (response.data.response_code != 0) {
        setIsError(true)
        setResponseCode(response.data.response_code)
      }
      setQuestions(response.data.results)
    }
    catch (e) {
      setIsError(true)
    }
    finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    console.log(`Current count: ${count}, Category: ${category}, Difficulty: ${diff}, Type: ${type}`)
    getQuestions()
  }, [])
  return (
    <div className={classes.pageCanvas}>
      { isLoading ? <LoadingPage></LoadingPage> : 
          isError ? <ErrorPage code={responseCode}></ErrorPage> : 
            <QuestionPage questions={questions} totalCount={Number(count)}></QuestionPage>
      }
    </div>
  )
}

export default QuestionPageHandler
