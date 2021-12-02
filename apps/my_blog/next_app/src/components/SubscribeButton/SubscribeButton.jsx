import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton ({ priceId }: SubscribeButtonProps) {
  priceId

  return (
    <button
      _id={priceId}
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe Now
    </button>
  )
}
