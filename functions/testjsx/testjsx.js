import { getBody } from "./hello";

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: getBody(),
  };
}
