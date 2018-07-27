module.exports = {
    register: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body

        dbInstance.register_user(username, password)
            .then(() => {res.sendStatus(200)})
            .catch(err => {
                res.status(500).send({error: 'That didnt work'})
                console.log(err)
            })
    },
    login: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body

        dbInstance.register_user(username, password)
            .then(() => {res.sendStatus(200)})
            .catch(err => {
                res.status(500).send({error: 'That didnt work'})
                console.log(err)
            })
        }        
}   