import styles from '../styles/Test.module.css'

export default function Test() {
  return (
    <div class={styles.styleguide}>
      <p className={styles.text}>Switch</p>
      <label class={styles.switch}>
        <input type="checkbox" />
        <span class={styles.switchslider}></span>
        <span class={styles.switch_back}></span>
      </label>
      <p className={styles.text}>Slider</p>
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          class={styles.slider}
          id="myRange"
        />
      </div>
    </div>
  )
}