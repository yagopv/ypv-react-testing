var Router = ReactRouter;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

// declare our routes and their hierarchy
var routes = (
    <Route name="app" handler={ App } path="/">
        <Route name="todo" path="todo" handler={ Todo } />
        <Route name="about" path="about" handler={ About } />
        <DefaultRoute handler={ Home } />
    </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
    React.render(<Root/>, document.body);
});