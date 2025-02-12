import React, { FC, useEffect, useState } from 'react'
import classes from './CategoriesInput.module.css'
import AvailableCategories from './AvailableCategories'

interface CategoriesInputProps {
  setCategoryId: (value: number) => void;
}

const CategoriesInput: FC<CategoriesInputProps> = ({setCategoryId}) => {
  // Ключ объекта - название категории
  // хранящееся по ключу значение - айди категории для запроса в API
  const categories: {[index: string]: number} = {
    "Any Category": 8,
    "General Knowledge": 9,
    "Entertainment: Books": 10,
    "Entertainment: Film": 11,
    "Entertainment: Music": 12,
    "Entertainment: Musicals & Theatres": 13,
    "Entertainment: Television": 14,
    "Entertainment: Video Games": 15,
    "Entertainment: Board Games": 16,
    "Science & Nature": 17,
    "Science: Computers": 18,
    "Science: Mathematics": 19,
    "Mythology": 20,
    "Sports": 21,
    "Geography": 22,
    "History": 23,
    "Politics": 24,
    "Art": 25,
    "Celebrities": 26,
    "Animals": 27,
    "Vehicles": 28,
    "Entertainment: Comics": 29,
    "Science: Gadgets": 30,
    "Entertainment: Japanese Anime & Manga": 31,
    "Entertainment: Cartoon & Animations": 32
  }
  const [selectableCategories, setSelectableCategories] = useState<{[index: string]: number}>(categories)
  const [categoryValue, setCategoryValue] = useState("")
  const [shouldShowCategories, setShouldShowCategories] = useState(false)
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryValue(e.target.value)
  }
  useEffect(() => {
    // Реализация .filter для объекта по ключу
    setSelectableCategories(() => {
      let newVal: {[index: string]: number} = {}
      for (let key in categories) {
        if (key.toLowerCase().includes(categoryValue.toLowerCase())) {
          newVal[key] = categories[key]
        }
      }
      return newVal
    })
    // Также изменяем id категории для запроса в API
    setCategoryId(categories[categoryValue] || 0)
  }, [categoryValue])
  return (
    <div>
      <div className={classes.textInputDiv}>
        <h2>Category:</h2>
        <div className={classes.categoryInputDiv}>
          <input
            required
            type='text'
            size={13}
            onFocus={() => setShouldShowCategories(true)}
            onBlur={() => setShouldShowCategories(false)}
            value={categoryValue}
            onChange={changeHandler}
            className={classes.textInput}></input>
            <AvailableCategories 
              // selectableCategories в данном случае - массив названий
              selectableCategories={Object.keys(selectableCategories)} 
              shouldShowCategories={shouldShowCategories}
              setCategory={setCategoryValue}></AvailableCategories>
        </div>
      </div>
    </div>
  )
}

export default CategoriesInput
