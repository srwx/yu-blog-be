import { Request } from "express"

// i want req.body has type, but not sure how to set type via middleware, so i create custom type that receive generic type and prefer generic type as body
// https://stackoverflow.com/a/55413670
export interface ExpressCustomRequestBody<T> extends Request {
  body: T
}
