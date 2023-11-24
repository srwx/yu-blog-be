import { Request } from "express"

export interface ExpressCustomRequestBody<T> extends Request {
  body: T
}
