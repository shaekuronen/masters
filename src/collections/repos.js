import Collection from 'ampersand-rest-collection'
import Repo from '../models/repo'
import githubAuthMixin from '../helpers/github-auth-mixin'

export default Collection.extend(githubAuthMixin, {
  model: Repo,
  url: 'https://api.github.com/user/repos'
})