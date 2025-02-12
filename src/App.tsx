import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import StartingPage from './pages/StartingPage/StartingPage'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import QuestionPageHandler from './pages/QuestionPageHandler/QuestionPageHandler'
import ResultsPage from './pages/ResultsPage/ResultsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartingPage></StartingPage>}></Route>
        <Route path='/settings/:first' element={<SettingsPage></SettingsPage>}></Route>
        <Route path='/game/:count/:category/:diff/:type' element={<QuestionPageHandler></QuestionPageHandler>}></Route>
        <Route path='/results/:rightCount/:totalCount' element={<ResultsPage></ResultsPage>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
