import React, { useState } from "react"

const useLanguage = () => {
  const [newlan, setNewLan] = useState("")
  const [language, setLanguage] = useState(
    "English"
      ? localStorage.getItem("Language") === null
      : localStorage.getItem("Language")
  )

  const changeLang = () => {
    localStorage.setItem("Language", newlan)
    setLanguage(localStorage.getItem("Language"))
  }
  return { language, newlan, setNewLan, changeLang }
}

export default useLanguage
