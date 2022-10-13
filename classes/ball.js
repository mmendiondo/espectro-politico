class Ball {
	#x= 0;
	#y = 0;
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  static displayName = "Ball";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Ball(5, 5);
const p2 = new Ball(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Ball.displayName);      // "Ball"
console.log(Ball.distance(p1, p2)); // 7.0710678118654755