## 단일 소수 확인 방법들

## 요약 설명

- 단일 숫자의 소수 판별에는 제곱근을 활용한 방법이 가장 효율적이다.
- 범위 내의 소수 구하기에는 에라토스테네스의 체가 가장 효율적인 방법이다.

## 핵심 개념

### 1. 기본 반복문 방법

이 방법은 2부터 주어진 숫자의 절반까지의 숫자로 나눠 보며, 나누어 떨어지면 소수가 아니라고 판단하는 가장 기본적인 방식

```js
function isPrime(num) {
  if (num < 2) return false; // 2보다 작은 숫자는 소수가 아님
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      // 나누어 떨어지면 소수가 아님
      return false;
    }
  }
  return true; // 나누어 떨어지지 않으면 소수
}
console.log(isPrime(23)); // true
```

-> 이 방식은 간단하지만, 숫자가 커질수록 성능이 떨어진다

### 2. 제곱근을 활용한 최적화 방법

소수를 판별할 때, 주어진 숫자의 제곱근까지만 나눠 보면 충분하다. 이는 두 수의 곱으로 나눠 떨어지는 경우, 그 중 하나는 항상 제곱근 이하이기 때문이다.

```js
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // 제곱근까지만 반복
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(23)); // true
```

-> 이 방법은 숫자의 절반까지 나눠 보는 대신 제곱근까지만 확인하므로 연산 횟수가 줄어들어 효율적이다

### 3. 짝수 생략 방법

2를 제외한 짝수는 소수가 될 수 없으므로, 2로 나눠떨어지는 숫자를 미리 걸러내고 이후 홀수만 검사하는 방식이다

```js
function isPrime(num) {
  if (num < 2) return false;
  // 2는 소수지만 그 외의 짝수는 소수가 아님
  if (num % 2 === 0) return num === 2;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    // 3부터 홀수만 검사
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(23)); // true
```

-> 이 방법은 짝수를 제외한 홀수만 검사하므로 연산이 더욱 효율적이다

## 언제 사용하면 좋은가?

- 문제 유형: "주어진 숫자가 소수인지 판별해라"
- 문제 유형: "n의 값이 클 때 소수 판별을 효율적으로 해봐라"
- 문제 유형: "짝수를 제외하고 소수 판별 알고리즘을 최적화해라"

## 추천 문제

[_백준\_에라토스테네스의 체\_4948_](https://www.acmicpc.net/problem/4948)

[_백준\_소수의 연속합\_1644_](https://www.acmicpc.net/problem/1644)
