/* eslint-disable import/no-cycle */
import { initializers } from '@dropins/tools/initializer.js';
import { initialize, setFetchGraphQlHeaders } from '@dropins/storefront-cart/api.js';
import { initializeDropin } from './index.js';
import { fetchPlaceholders } from '../aem.js';
import { getHeaders } from '../configs.js';
// GraphQL Client
import * as mesh from '@dropins/tools/fetch-graphql.js';

// component tools
import { initializers } from '@dropins/tools/initializer.js';

// drop-in component functions
import * as pkg from '@dropins/storefront-cart/api.js';

// Drop-in component provider
import { render as provider } from '@dropins/storefront-cart/render.js';

// Drop-in component containers
import Cart from '@dropins/storefront-cart/containers/Cart.js';
import MiniCart from '@dropins/storefront-cart/containers/MiniCart.js';

// Set endpoint configuration
mesh.setEndpoint('https://edge-sandbox-graph.adobe.io/api/a6102921-ee5b-47c1-8419-3b8d7988713a/graphql');

// Set the customer token. This method is specific to @dropins/storefront-cart package.
pkg.setFetchGraphQlHeader('commerce-auth', '<token>');

// Set store code header. This method is specific to the @dropins/tools package.
mesh.setFetchGraphQlHeader('store', '<default>');

// Render Cart
provider.render(Cart, {
  routeProduct: (item) => {
    return `${item.url.categories.join('/')}/${item.url.urlKey}`;
  },
  routeEmptyCartCTA: () => 'your-empty-cart-element',
  routeCheckout: () => 'your-checkout-element',
})(document.getElementById('your-cart-element'));

// Render MiniCart
provider.render(MiniCart, {
  routeProduct: (item) => {
    return `${item.url.categories.join('/')}/${item.url.urlKey}`;
  },
  routeEmptyCartCTA: () => 'your-empty-cart-element',
  routeCart: () => 'your-cart-element',
  routeCheckout: () => 'your-checkout-element',
})(document.getElementById('your-mini-cart-element'));

  return initializers.mountImmediately(initialize, { langDefinitions });
})();
