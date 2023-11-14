'use client'

import { useState } from "react"
import axios from "axios"
import styles from "./style.module.css"

export default function ArraySequence() {
  const [output, setOutput] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [step, setStep] = useState(1)
  const [startBracket, setStartBracket] = useState('[')
  const [endBracket, setEndBracket] = useState(']')
  const [separator, setSeparator] = useState(',')
  const [randomize, setRandomize] = useState(0)

  const updateOutput = (e) => { setOutput(e.target.value) }
  const updateStart = (e) => { setStart(e.target.value) }
  const updateEnd = (e) => { setEnd(e.target.value) }
  const updateStep = (e) => { setStep(e.target.value) }
  const updateStartBracket = (e) => { setStartBracket(e.target.value) }
  const updateEndBracket = (e) => { setEndBracket(e.target.value) }
  const updateSeparator = (e) => { setSeparator(e.target.value) }
  const updateRandomize = (e) => { setRandomize(e.target.checked ? 1 : 0) }

  const generateOutput = async () => {
    const startValue = start ? +start : 0
    const endValue = end ? +end : 0
    const steps = step ? +step : 1
    const sep = separator ? separator : ' '

    try {
      const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/array', {
        params: {
          's': startValue,
          'e': endValue,
          'i': steps,
          'r': randomize,
        }
      })
      setOutput(startBracket + data.data.join(sep) + endBracket)
    } catch (error) {
      if (error instanceof TypeError)
        setOutput('Invalid input.')
      else
        setOutput('Error: Unable to reach API server.')
    }
  }

  return (
    <>
    <div className={styles['input-window']}>
      <legend className={styles.heading}>Sequence</legend>
      <form action="" className={styles['input-container']}>
        <label htmlFor="startRange" className={styles['input-wrapper']}>
          <span className={styles['input-label']}>Starting number</span>
          <input type="number" name="startRange" id="startRange" placeholder="0" value={start} className={styles.input} onChange={updateStart} />
        </label>
        <label htmlFor="endRange" className={styles['input-wrapper']}>
          <span className={styles['input-label']}>Ending number</span>
          <input type="number" name="endRange" id="endRange" placeholder="0" value={end} className={styles.input} onChange={updateEnd} />
        </label>
        <label htmlFor="step" className={styles['input-wrapper']}>
          <span className={styles['input-label']}>Steps</span>
          <input type="number" name="step" id="step" placeholder="0" value={step} className={styles.input} onChange={updateStep} />
        </label>
        <label htmlFor="start" className={styles['input-wrapper']}>
          <span className={styles['input-label']}>Opening bracket</span>
          <input type="text" name="start" id="start" value={startBracket} className={styles.input} onChange={updateStartBracket} />
        </label>
        <label htmlFor="end" className={styles['input-wrapper']}>
          <span className={styles['input-label']}>Closing bracket</span>
          <input type="text" name="end" id="end" value={endBracket} className={styles.input} onChange={updateEndBracket} />
        </label>
        <label htmlFor="separator" className={styles['input-wrapper']}>
          <span className={styles['input-label']}>Separator</span>
          <input type="text" name="separator" id="separator" value={separator} className={styles.input} onChange={updateSeparator} />
        </label>
        <label htmlFor="random-sequence"  className={styles['random-sequence-wrapper']}>
          <input type="checkbox" name="random-sequence" id="random-sequence" className={styles['random-sequence-input']} onChange={updateRandomize} />
          <span className={styles['random-sequence-label']}>Randomize sequence</span>
        </label>
      </form>
      <button onClick={generateOutput} className={styles.button}>Generate</button>
      <div className={styles['textarea-wrapper']}>
        <textarea name="output" id="" placeholder="[]" value={output} className={styles.textarea} onChange={updateOutput}></textarea>
      </div>
    </div>
    </>
  )
}
