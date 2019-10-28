import { AUTHENTICATED } from './actions';//

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);///

const store = createStoreWithMiddleware(reducers);//

const user = localStorage.getItem('user');///


if(user) {

    validelaconnexioion ('true')

  store.dispatch({ type: AUTHENTICATED });
}
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/signin" component={noRequireAuth(Signin)} />
        <Route path="/signup" component={noRequireAuth(Signup)} />
        <Route path="/signout" component={Signout} />
        <Route path="/secret" component={requireAuth(SecretPage)} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root')
);