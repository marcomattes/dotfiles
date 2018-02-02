// Use conventional changelog preset angular 

'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: 'feat:     A new feature'},
    {value: 'fix',      name: 'fix:      A bug fix'},
    {value: 'style',    name: 'style:    Changes that do not affect the meaning of the code'},
    {value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature'},
    {value: 'perf',     name: 'perf:     A code change that improves performance'},
    {value: 'test',     name: 'test:     Test Commits'},
    {value: 'chore',    name: 'chore:    Changes to the build process or auxiliary tools'},
    {value: 'revert',   name: 'revert:   Revert to a commit'},
    {value: 'WIP',      name: 'WIP:      Work in progress'}
  ],

  scopes: [
    {name: 'framework'},
    {name: 'header'},
    {name: 'footer'},
    {name: 'blog'},
    {name: 'benefits'},
    {name: 'navigation'},
    {name: 'blog-meta'},
    {name: 'forms'},
    {name: 'related-content'}
  ],


  allowCustomScopes: true,
  allowBreakingChanges: ['feat']

};
