import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { Quote } from '../components/Quote/index'
import Head from "next/head" 
import dynamic from 'next/dynamic'
import styles from './index.module.scss'
import CodeContainer from '../components/CodeContainer/index'
const Editor = dynamic(() => import('../components/Editor/index'), { ssr: false }) //code mirror need to run on client side

const Home: NextPage = () => {
  const [html, setHtml] = useState<string>('')
  const [css, setCss] = useState<string>('')
  const [js, setJs] = useState<string>('')
  const [documentCode, setDocumentCode] = useState<string>('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDocumentCode(
        `<html>
          <body> ${html} </body>
          <style> ${css} </style> 
          <script> ${js} </script>
        </html>`
      )
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <Head>
        <title>doug.pen | Welcome</title>
      </Head>
      <Quote />
      <div className={styles.pane}>
        <Editor onChange={setHtml} displayName={"HTML"} value={html} language="xml" />
        <Editor onChange={setCss} displayName={"CSS"} value={css} language="css" />
        <Editor onChange={setJs} displayName={"JS"} value={js} language="javascript" />
      </div>
      <CodeContainer code={documentCode} />
    </>
  )
}

export default Home
