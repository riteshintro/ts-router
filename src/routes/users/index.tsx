import { createFileRoute } from '@tanstack/react-router'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const Route = createFileRoute('/users/')({
  component: RouteComponent,
})

function RouteComponent() {
    const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>
  }
  return <div>
      <h2>🎤 Voice Recognition</h2>
      <p>Status: {listening ? 'Listening...' : 'Stopped'}</p>

      <div style={{ margin: '10px 0' }}>
        <button className='bg-green-300' onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>{' '}
        <button className='bg-red-300'  onClick={SpeechRecognition.stopListening}>Stop</button>{' '}
        <button className='bg-blue-300'  onClick={resetTranscript}>Reset</button>
      </div>

      <p><strong>Transcript:</strong> {transcript}</p>
    </div>
}
