import { createSignal } from 'solid-js';
import styles from './Counter.module.css';

	
export default function Counter(props) {
	const [count, setCount] = createSignal(0);
	const add = () => setCount(count() + 1);
	const subtract = () => setCount(count() - 1);

	return (
		<div class={styles.main}>
			<div class={styles.counter}>
				<button onClick={subtract}>-</button>
				<pre>{count()}</pre>
				<button onClick={add}>+</button>
			</div>

			<div class={styles.counterMessage}>{props.children}</div>
		</div>
	)
}	
