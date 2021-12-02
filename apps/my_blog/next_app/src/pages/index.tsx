import Head from 'next/head'
import { stripe } from '../services/stripe'

import styles from '../styles/home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton/SubscribeButton'


interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head><title>Home | My Blog</title></Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all the publications <br/>
            <span>for $ {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/programming.svg" alt="Boy Coding"/>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1K1qClJw7dKoSaXHMj8erHgK', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount as number/100),
  }

  return {
    props: {
      product
    }
  }
}
