angular.module('app', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.people = [
      {
        name: 'Joel',
        email: 'joel@egghead.io',
        job: 'developer',
        duties: ['scrubbing pots', 'filling trash bins', 'polishing door knobs']
      },
      {
        name: 'Deborah',
        email: 'deborah@cosmorealty.com',
        job: 'Realtor™'
      },
      {
        name: 'Henry',
        email: 'henry@bankco.com',
        job: 'Janitor'
      }
    ];
  })
;