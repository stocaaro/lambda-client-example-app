
import type { Handler } from 'aws-lambda';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../data/resource';
import { getAmplifyDataClientConfig } from '@aws-amplify/backend/function/runtime';
import { env } from '$amplify/env/data-access'; // replace with your function name

const { resourceConfig, libraryOptions } = await getAmplifyDataClientConfig(env);

Amplify.configure(resourceConfig, libraryOptions);

const client = generateClient<Schema>();

export const handler: Handler = async (event) => {
    const { errors: createErrors, data: newTodo } = await client.models.Todo.create({
        name: "My new todo",
        description: "Todo description",
        isDone: false,
      })
      console.log(createErrors);
      console.log(newTodo);
    
    
      const { errors: listErrors, data: todos } = await client.models.Todo.list();
      console.log(listErrors);
      console.log(todos);
      return event;
}