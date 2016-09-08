import tacos from './tacos'

describe('tacos reducer', () => {
  it('should handle initial state', () => {
    expect(
      tacos(undefined, {})
    ).toEqual([])
  })
})
