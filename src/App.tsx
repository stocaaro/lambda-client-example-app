import { useState } from 'react'
import './App.css'
import { Amplify } from 'aws-amplify';
import config from '../amplify_outputs.json';
import { generateClient } from 'aws-amplify/api';
import type { Schema } from '../amplify/data/resource';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(config);

const client = generateClient<Schema>();

function App() {
  const [count, setCount] = useState(0)
  const callThing = async () => {
    const {data} = await client.queries.callDataAccess({})
    console.log(data);
  }
  return (
    <>
      <h1>Lambda data client Demo</h1>
      <div className="card">
        <button onClick={callThing}>
          Call data access
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default withAuthenticator(App);