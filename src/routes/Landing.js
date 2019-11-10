import React from 'react';

class Landing extends React.Component {

    render() {
      return (
          <div className="container">
              <div className="jumbotron">
                <h1 className="display-4">Managing your project in one place</h1>
                    <p className="lead">
                        With LJ Todolist you have all of your planning in one place with and ease of use interface.
                        It will be easier to communicate with your team and LJ Todolist can be used for almost everything
                        from Software Development to resturant. LJ Todolist can also be used to show your project to the
                        world with public project.
                    </p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="btn btn-primary btn-lg" href="#" role="button">Learn more</p>
                </div>
          </div>
      );
    }
  }

export default Landing;
