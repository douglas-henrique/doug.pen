import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled } from 'react-codemirror2'
import styles from './styles.module.scss'

interface EditorProps {
  language: string;
  displayName: string;
  onChange: (value: string) => void;
  value: string;
}

export default function Editor({ language, displayName, onChange, value }: EditorProps) {
  function handleChange(editor: unknown, data: unknown, value: string) {
    onChange(value)
  }

  return (
    <div className={styles.editorPane}>
      <div className={styles.editorHeader}>
        <h1> {displayName} </h1>
      </div>
      <Controlled
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          mode: language,
          lineNumbers: true,
          theme: 'material',
          smartIndent: true,
        }} />
    </div>
  )
}