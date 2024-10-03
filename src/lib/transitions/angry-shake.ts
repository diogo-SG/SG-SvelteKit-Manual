// This is a custom transition that shakes the element back and forth
// It's pretty inefficient, but I had fun making it and it's a good example of
// how to create a custom transition

function calcTranslation(duration: number, timer: number, spread: number) {
	const left = `transform: translate3d(-${spread}px, 0, 0)`;
	const right = `transform: translate3d(${spread}px, 0, 0)`;
	const top = `transform: translate3d(0, -${spread}px, 0)`;
	const bottom = `transform: translate3d(0, ${spread}px, 0)`;
	const bottomRight = `transform: translate3d(${spread}px, ${spread}px, 0)`;
	const bottomLeft = `transform: translate3d(-${spread}px, ${spread}px, 0)`;
	const topLeft = `transform: translate3d(-${spread}px, -${spread}px, 0)`;
	const topRight = `transform: translate3d(${spread}px, -${spread}px, 0)`;

	const directions = [
		left,
		right,
		top,
		bottom,
		bottomRight,
		bottomLeft,
		topLeft,
		topRight
	];

	// keep the speed constant regardless of the duration
	const animationSpeed = 1 / duration;

	return directions[
		Math.floor((((timer / animationSpeed) * 2000) / duration) * directions.length) %
			directions.length
	];
}

export function angryShake(
	node: HTMLElement,
	{ duration }: SvelteTransitionConfig
): SvelteTransitionReturnType {
	duration = duration || 100000;
	return {
		duration,
		css: (timer) => {
			return `
      ${calcTranslation(duration, timer, 10)};
      transform-origin: center center;
            ;`;
		}
	};
}
