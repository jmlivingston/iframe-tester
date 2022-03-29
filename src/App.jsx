import { useEffect } from 'react'

function App() {
  useEffect(() => {
    ;(async () => {
      const testResponse = await fetch('/test')
      const testJson = await testResponse.json()
      console.log(testJson)
    })()
  }, [])

  return (
    <>
      test
      <form action="iframe.php" target="my-iframe" method="post">
        <label for="text">Some text:</label>
        <input type="text" name="text" id="text" />
        <input type="submit" value="post" />
      </form>
      <iframe name="my-iframe" src="iframe.php" />
    </>
  )
}

export default App
