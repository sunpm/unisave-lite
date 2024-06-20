import { request } from '../request'

export async function demoFetch() {
  return await request('/demo/index', {
    name: '123',
  })
}
