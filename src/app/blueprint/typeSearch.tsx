'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { searchType } from './actions'

const useTimeout = (callback: any, delay: number) => {
  const timeoutRef = useRef<number | undefined>(undefined)
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current)
  }, [])

  const memoizedCallback = useCallback(
    (args: any) => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = undefined
        callbackRef.current?.(args)
      }, delay)
    },
    [delay, timeoutRef, callbackRef]
  )

  return useMemo(() => [memoizedCallback], [memoizedCallback])
}

export const TypeSearch = () => {
  const [typeName, setTypeName] = useState<string>('')
  const [typesFound, setTypesFound] = useState<[string, string][]>([])

  const runSearch = () => {
    searchType(typeName).then((results) => {
      setTypesFound(results)
    })
  }

  const [timeout] = useTimeout(() => {
    runSearch()
  }, 500)

  useEffect(() => {
    timeout('ok')
  }, [typeName, timeout])

  return (
    <>
      <input type="text" onChange={(e) => setTypeName(e.target.value)} />
      <button type="button" onClick={runSearch}>
        Search
      </button>
      <br />
      <ul>
        {typesFound.map(([typeID, typeName], i) =>
          i >= 5 ? (
            <li key={undefined}>...</li>
          ) : (
            <li key={typeID}>
              <a href={`/blueprint/${typeID}`}>{typeName}</a>
            </li>
          )
        )}
      </ul>
    </>
  )
}
