
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/amazon-clone-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/amazon-clone-project"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/home"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/search"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/products"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/product/1"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/product/2"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/product/3"
  },
  {
    "renderMode": 0,
    "route": "/amazon-clone-project/product/*"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/electronics"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/fashion"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/home-kitchen"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/cart"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/checkout"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/account"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/admin"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/admin/products"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/admin/orders"
  },
  {
    "renderMode": 2,
    "route": "/amazon-clone-project/payment"
  },
  {
    "renderMode": 2,
    "redirectTo": "/amazon-clone-project",
    "route": "/amazon-clone-project/**"
  }
],
  assets: {
    'index.csr.html': {size: 1098, hash: 'e688eaf505a0ed88f626ff37d6cb25aba0e1ce9fa4523846b913f6932f90a174', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1154, hash: '1cc14f539e70e29a8cdb3de0d55a3a75e014e3054d23b81641f0ba0f97852c97', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21803, hash: 'e9c44568c2703e67ac65d14a2a4f87d872ff0ad88f5a90d44e9483c72eba2f06', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 21803, hash: 'e9c44568c2703e67ac65d14a2a4f87d872ff0ad88f5a90d44e9483c72eba2f06', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 28360, hash: 'b43fd0478aab7675d5853abb8ac76cd07f7f4e6c94d016ca74fa7267d6abdb40', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'product/1/index.html': {size: 11008, hash: '30c695b49f02526edc86a4568d7d814665df3432fdc31503a9466bdf768903ab', text: () => import('./assets-chunks/product_1_index_html.mjs').then(m => m.default)},
    'product/3/index.html': {size: 11014, hash: '09cc699dab069e80c0f01c233fc2ee140cef0c4693ee826dd3340f16a6f37f8a', text: () => import('./assets-chunks/product_3_index_html.mjs').then(m => m.default)},
    'electronics/index.html': {size: 18055, hash: '0286384e5ca4f748ce80cf90564656c0172355eba4d86e32ce74e0754914d447', text: () => import('./assets-chunks/electronics_index_html.mjs').then(m => m.default)},
    'fashion/index.html': {size: 18589, hash: '595a9409795408b924c4c4d0bb62c1d16ed74d7673759423bf2f6ff541275a7a', text: () => import('./assets-chunks/fashion_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 13346, hash: 'de902c8525144506ea76cb65d5d23ed7e0481758c6f862b119133e02f00f6d38', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'home-kitchen/index.html': {size: 18694, hash: '183251a0ec8d52cbfcd419dc18d50905e4d62dbf23f80d95314db1559ce1b4ee', text: () => import('./assets-chunks/home-kitchen_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 10573, hash: '030c703183d0827d962fc9ec3ad99c329876e7023d1a353988b677f0b213c6d9', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'account/index.html': {size: 15351, hash: 'a5dfd16cf4a84b9e2961e7290f40d700fc6b3b25a3359e9bf1f8f0b011bcf55a', text: () => import('./assets-chunks/account_index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 10712, hash: '7e79d08641421c83a3c302d4cfbb54e1d4d8c0257bdd9547db92bd2e90110ad1', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'admin/products/index.html': {size: 10594, hash: '7a2c4bef93d9ea51ea1ee64da9cf7532181f74a1bb157d1fa2b8bddab1787650', text: () => import('./assets-chunks/admin_products_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 10594, hash: '7a2c4bef93d9ea51ea1ee64da9cf7532181f74a1bb157d1fa2b8bddab1787650', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'payment/index.html': {size: 12943, hash: 'fb714fd84837207183f2eef0791728d654c87e9c4386ded497e4924db6836690', text: () => import('./assets-chunks/payment_index_html.mjs').then(m => m.default)},
    'admin/orders/index.html': {size: 10594, hash: '7a2c4bef93d9ea51ea1ee64da9cf7532181f74a1bb157d1fa2b8bddab1787650', text: () => import('./assets-chunks/admin_orders_index_html.mjs').then(m => m.default)},
    'product/2/index.html': {size: 10999, hash: 'e0e4e4cd57a159c1db2f6e45e7b0dd8bfeb65e83ad622410edb111674ca45d49', text: () => import('./assets-chunks/product_2_index_html.mjs').then(m => m.default)},
    'styles-CSTHODHL.css': {size: 2171, hash: 'oCnTZDSTnRE', text: () => import('./assets-chunks/styles-CSTHODHL_css.mjs').then(m => m.default)}
  },
};
