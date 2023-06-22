module.exports = {
    description: 'User login',
    inputs: {
        email: {
            type: 'string',
            required: true
        },
        password: {
            type: 'string',
            required: true
        }
    },

    fn: async function (inputs, res){
        try {
            let { email, password } = inputs;
            email = email.trim();
            password = password.trim();

            const fetchUser = await sails.models.user.findOne({
                email: email
            });

            if (!fetchUser) {
                this.res.badRequest('Invalid credentials entered!')
            } 

            const hashedPassword = fetchUser.password;
            const isMacthed = await sails.helpers.passwords.compare(password, hashedPassword);

            if(!isMacthed){
                this.res.badRequest('Invalid credentials entered!');
            }

            // matched, create token
            const tokenData = { userId: fetchUser.id, email:email};
            const token = await sails.helpers.tokens.createJwt(tokenData);

            fetchUser.token = token;

            return this.res.ok(fetchUser);

        } catch (error) {
            console.log(error);
            this.res.serverError();
        }
    }
}