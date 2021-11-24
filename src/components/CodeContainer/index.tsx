import styles from './styles.module.scss'

interface CodeContainerProps { 
  code: string;
}

export default function CodeContainer({ code }: CodeContainerProps) {
  return (
    <div className={styles.codeContainer}>
      <iframe
        className={styles.code}
        srcDoc={code}
        title="output"
        sandbox="allow-scripts allow-modals"
        frameBorder="0"
        width="100%"
        height="100%" />
    </div>
  )
}