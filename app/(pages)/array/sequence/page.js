"use client"

import { useState } from "react"
import axios from "axios"
import styles from "./style.module.css"

export default function Array() {
  const [output, setOutput] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [step, setStep] = useState(1)
  const [startBracket, setStartBracket] = useState('[')
  const [endBracket, setEndBracket] = useState(']')
  const [separator, setSeparator] = useState(',')

  const updateOutput = (e) => { setOutput(e.target.value) }
  const updateStart = (e) => { setStart(e.target.value) }
  const updateEnd = (e) => { setEnd(e.target.value) }
  const updateStep = (e) => { setStep(e.target.value) }
  const updateStartBracket = (e) => { setStartBracket(e.target.value) }
  const updateEndBracket = (e) => { setEndBracket(e.target.value) }
  const updateSeparator = (e) => { setSeparator(e.target.value) }


  const generateOutput = async () => {
    const startValue = start ? +start : 0
    const endValue = end ? +end : 0
    const steps = step ? +step : 1
    const sep = separator ? separator : ' '

    try {
      const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/array", {
        params: {
          's': startValue,
          'e': endValue,
          'i': steps,
        }
      })
      console.log(data.data)
      setOutput(startBracket + data.data.join(sep) + endBracket)
    } catch (error) {
      if (error instanceof TypeError)
        setOutput('Invalid input.')
      else
        setOutput('Error.')
    }
  }

  return (
    <>
    <div className={styles.input_window}>
      <legend className={styles.heading}>Sequence</legend>
      <form action="" className={styles.inputArea}>
        <label htmlFor="startRange" className={styles.input}>
          <span>Starting number</span>
          <input type="number" name="startRange" id="startRange" placeholder="0" value={start} onChange={updateStart} />
        </label>
        <label htmlFor="endRange" className={styles.input}>
          <span>Ending number</span>
          <input type="number" name="endRange" id="endRange" placeholder="0" value={end} onChange={updateEnd} />
        </label>
        <label htmlFor="step" className={styles.input}>
          <span>Steps</span>
          <input type="number" name="step" id="step" placeholder="0" value={step} onChange={updateStep} />
        </label>
        <label htmlFor="start" className={styles.input}>
          <span>Opening bracket</span>
          <input type="text" name="start" id="start" value={startBracket} onChange={updateStartBracket} />
        </label>
        <label htmlFor="end" className={styles.input}>
          <span>Closing bracket</span>
          <input type="text" name="end" id="end" value={endBracket} onChange={updateEndBracket} />
        </label>
        <label htmlFor="separator" className={styles.input}>
          <span>Separator</span>
          <input type="text" name="separator" id="separator" value={separator} onChange={updateSeparator} />
        </label>
      </form>
      <button onClick={generateOutput}>Generate</button>
      <div>
        <textarea name="output" id="" placeholder="[]" value={output} onChange={updateOutput}></textarea>
      </div>
    </div>
    </>
  )
}
