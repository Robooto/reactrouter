# Notes

## React Router

Overview - React Router comes with a history api, a history change lets react router know it needs to render components, which lets react know to do something.

- nesting routes
    <Route path="/" component={App}>
        <Route path="greet" component={Greeting} />
        <Route path="greet2" component={Greeting} />
        <Route path="greet3" component={Greeting} />
    </Route>
    In the main route {this.props.children}

- life cycle method is a built in react method

