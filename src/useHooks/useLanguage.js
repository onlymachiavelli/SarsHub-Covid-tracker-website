import React, { useEffect, useState } from "react"

const useLanguage = () => {
  const [newlan, setNewLan] = useState("")
  const [language, setLanguage] = useState("English")

  useEffect(() => {
    if (localStorage.getItem("Language") === null)
      localStorage.setItem("Language", "English")
    const languageFromLocalStorage = localStorage.getItem("Language")
    if (languageFromLocalStorage) setLanguage(languageFromLocalStorage)
    else setLanguage("English")
  }, [])

  const changeLang = () => {
    localStorage.setItem("Language", newlan)
    setLanguage(localStorage.getItem("Language"))
  }
  return { language, newlan, setNewLan, changeLang }
}

export default useLanguage
