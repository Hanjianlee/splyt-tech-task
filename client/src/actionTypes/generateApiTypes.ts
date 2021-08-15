/** Defines the Process of Each Type of Api Requests **/
export function generateApiActions(model: string, api: string) {
  return {
    REQUESTED: `${model}/${api}/REQUESTED`,
    SUCCESS: `${model}/${api}/SUCCESS`,
    FAILED: `${model}/${api}/FAILED`,
  };
}

/** Defines the Each Type of Rest Api Requests **/
export function generateRestActions(model: string) {
  return {
    GET: generateApiActions(model, "GET"),
    LIST: generateApiActions(model, "LIST"),
    POST: generateApiActions(model, "POST"),
    PATCH: generateApiActions(model, "PATCH"),
    PUT: generateApiActions(model, "PUT"),
    DELETE: generateApiActions(model, "DELETE"),
  };
}
