import Route from '@ember/routing/route';

export default class CryptosRoute extends Route {
  model() {
    return ['Bitcoin', 'Ethereum', 'Cardano'];
  }
}
