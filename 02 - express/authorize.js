const authorize = (req,res,next) => {

    const {user} = req.query;

    if (user === 'faheem') {
        // just simply
        req.user = {name: 'faheem', id: 3}
        // console.log(req.user);
        
        // authorizing to go show content
        next();
    } else {
        res.status(401).send('unauthorized')
    }
}

module.exports = authorize;