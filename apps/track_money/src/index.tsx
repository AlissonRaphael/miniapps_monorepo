import { render } from 'react-dom'
import { createServer } from 'miragejs'

import{ App } from './App'

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          amount: 10000,
          type: 'deposit',
          category: 'freelancer',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Despesas gerais',
          amount: 500,
          type: 'withdraw',
          category: 'casa',
          createdAt: new Date()
        },
        {
          id: 4,
          title: 'Trabalho',
          amount: 6000,
          type: 'deposit',
          category: 'trabalho',
          createdAt: new Date()
        },
        {
          id: 8,
          title: 'Parcela do carro',
          amount: 500,
          type: 'withdraw',
          category: 'casa',
          createdAt: new Date()
        }
      ]
    })
  }
})


render(<App/>, document.getElementById('root'))
