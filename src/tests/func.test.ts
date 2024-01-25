import { describe, test, expect } from 'vitest'
import { getListData } from '@/api/list'

describe('测试API', () => {
  test('getListData', async () => {
    let response: any = null
    response = await getListData({url: '', method: 'get', params: { id: 2 }})
    expect(response).toBe(response !== null);
  })
})
