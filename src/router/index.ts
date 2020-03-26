import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * Properties
 * - base アプリの基底パス
 * - path リクエストパス
 * - name コンポーネントの名前
 * - component ルーティングによって呼び出されるコンポーネント
 * - components ルーティングよって呼び出されるコンポーネント（複数）
 * - redirect リダイレクト先のパス
 * - children 配下ルートの定義
 * - props ルートパラメーターにプロパティを割り当てるか
 * - alias エイリアス
 * - meta ルートのメタ情報
 * - caseSensitive 大文字小文字を無視
 * -
 */
const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    /** 遅延ロード */
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: () => import('../views/Heroes.vue')
  },
  {
    /** ルートパラメーター */
    path: '/detail/:id',
    name: 'HeroDetail',
    component: () => import('../views/HeroDetail.vue')
  },
  {
    path: '/hero/new',
    name: 'HeroForm',
    component: () => import('../views/HeroForm.vue')
  },
  {
    path: '/example/:id',
    name: 'example',
    component: () => import('../views/Example.vue')
  }
];

/**
 * Options
 * - mode 動作モード
 * - routes ルーティング情報
 * - base アプリの基底URL
 * - fallback ブラウザがhistory未対応の場合hashにフォールバック
 * - linkActiveClass 現在のページに適用されるスタイルクラス
 * - linkExactActiveClass 完全一致のページに適用されるスタイルクラス
 * - scrollBehavior ページ移動時のスクロール方法
 */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
