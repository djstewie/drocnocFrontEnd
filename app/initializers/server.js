export function initialize(application) {
  application.inject('route', 'server', 'service:server');
  application.inject('controller', 'server', 'service:server');
  application.inject('component', 'server', 'service:server');
}

export default {
  name: 'server',
  initialize
};
