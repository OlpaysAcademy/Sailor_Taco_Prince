import * as actions from './index'

describe('taco actions', () => {
  it('addTaco should create ADD_TACO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TACO',
      id: 0,
      name: 'Use Redux'
    })
  })
})
