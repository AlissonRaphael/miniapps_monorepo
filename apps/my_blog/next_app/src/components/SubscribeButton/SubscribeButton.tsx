import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton ({ priceId }: SubscribeButtonProps) {
  priceId

  return (
    <button
      id={priceId}
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe Now
    </button>
  )
}
