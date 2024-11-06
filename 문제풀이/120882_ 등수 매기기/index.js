// indexOf 다시 정리

function solution(score) {
  let avgScores = score.map((arr) => (arr[0] + arr[1]) / 2);

  let sortedScores = [...avgScores].sort((a, b) => b - a);

  // indexOf가 첫번째 index만 가져오기 때문에..
  let result = avgScores.map((avg) => sortedScores.indexOf(avg) + 1);

  return result;
}
