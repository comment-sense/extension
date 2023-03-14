import { useContext, createContext, useState, useEffect } from "react"

export interface SentimentContextProps {
  analyzed: boolean
  setAnalyzed: (analyzed: boolean) => void
}
export const SentimentContext = createContext<SentimentContextProps>(
  {} as SentimentContextProps
)

export const SentimentProvider = ({ children }) => {
  const [analyzed, setAnalyzed] = useState(false)
  return (
    <SentimentContext.Provider value={{ analyzed, setAnalyzed }}>
      {children}
    </SentimentContext.Provider>
  )
}

export const useSentiment = () => useContext(SentimentContext)
