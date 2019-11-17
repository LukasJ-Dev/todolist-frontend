class routeHandler {

    Dashboard(isLoggedin, permission) {
        if(isLoggedin && permission.accessDashboard) {
            return {message: "", access: true, redirect: ''};
        }
        if(!isLoggedin) {
            return {message: "You're not logged in!", access: false, redirect: '/login'};
        }
        if(!permission.accessDashboard) {
            return {message: "You don't have permission to access this page", access: false, redirect: ''}
        }
        return {message: "Unknown reason", access: false, redirect: ''}
    }

    Login(isLoggedin) {
        if(isLoggedin) {
            return {message: "You're already logged in!", access: false, redirect: '/dashboard'}
        }
        return {message: "", access: true, redirect: ''};
    }
}

export default new routeHandler();