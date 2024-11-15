import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { postConfirmation } from './function/post-confirmation/resource'
import { functionWithDataAccess } from "./function/data-access/resource";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  auth,
  data,
  postConfirmation,
  functionWithDataAccess,
});
