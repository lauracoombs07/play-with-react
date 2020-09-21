import React from 'react'
import { mount } from 'enzyme'

import Button from '@material-ui/core/Button'
import ShoppingCart from './ShoppingCart'

describe('Shopping Cart', () => {
    it('should find both Buttons', () => {
        const wrapper = mount(<ShoppingCart />)
        expect(wrapper.containsMatchingElement(<Button>Add</Button>)).toBe(true)
        expect(wrapper.containsMatchingElement(<Button>Remove</Button>)).toBe(true)
    })
    it('should contain list of Checklist containing cat and dog', () => {
        const wrapper = mount(<ShoppingCart />)
        expect(wrapper.contains('.checkbox')).toBe(true)
    })
})
