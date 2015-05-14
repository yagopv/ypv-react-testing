var Router = ReactRouter;
var Link = Router.Link;

var App = React.createClass({
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-inverse" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" href="#" to="app">Home</Link>
                        </div>

                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="app">Home</Link></li>
                                <li activeClassName="active"><Link to="todo">Todo</Link></li>
                                <li><Link to="about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});