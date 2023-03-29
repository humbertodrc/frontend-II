import { rest } from 'msw';
import { url } from '../api/endPoint';
import { results } from './results';


export const handlers = [
  rest.get(url, (req, res, ctx) => {
    console.log("Ejecutando el handler de msw");
    return res(
      ctx.status(200),
      ctx.json({
        results
      })
    )
  })
]