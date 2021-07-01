/**
 * 関数宣言の変更
 * 関数名をわかりやすくする
 * 利用している箇所が大量にある場合「移行」を使う
 * 1. 関数から関数の抽出を実施
 * 2. 旧関数から新関数を呼ぶ
 * 3. 古い呼び出し箇所を関数のインライン化を施す
 * 4. 古い関数には非推奨コメントするよ良さそう！
 *
 */

/** パラメータをプロパティに変更する */

// UserInterfaceに依存したisOsakaを広いコンテキストで利用できるように v1
// function isOsaka(user) {
//   return ['osaka', 'tokyo', 'fukuoka'].includes(user.from);
// }

// v2
// function isOsaka(user) {
//   const from = user.from;
//   return ['osaka', 'tokyo', 'fukuoka'].includes(from);
// }

// v3
// function isOsaka(user) {
//   const from = user.from;
//   return isOsakaXX(from);
// }
//
function isOsaka(from) {
  return ['osaka', 'tokyo', 'fukuoka'].includes(from);
}

const myUser = [
  { name: 'Taro', from: 'tokyo' },
  { name: 'jiro', from: 'osaka' },
].filter((u) => isOsaka(u.from));
