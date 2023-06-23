const User = require("../../models/User");

module.exports = {
    inputs: {
        firstName: {type: 'string', required: true},
        lastName: {type:'string', required:true},
        email: {type:'string', required:true},
        password: {type:'string', required:true}
    },
    exits:{
        success: {},
        error: {},
    },
    fn: async function (inputs, exits) {
        try {
            let {firstName, lastName, email, password} = inputs;
            firstName = firstName.trim();
            lastName = lastName.trim();
            email = email.trim();
            password = password.trim();
            // conditions
            if (!(firstName && lastName && email && password)){
                throw Error("Empty input fields!")
            } else if(!(/^[a-zA-Z ]*$/.test(firstName) && /^[a-zA-Z ]*$/.test(lastName))){
                throw Error("Incorrect Name!")
            } else if (password.length < 8){
                throw Error("Password is too short!")
            } else{
                const existingUser = await sails.models.user.findOne({
                    email: email
                });
                if (existingUser) {
                    throw Error("User already exists!")
                }
                // success
                await sails.models.user.create({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                });
            }

            return exits.success('User account created successfully.');

        } catch (error) {
            console.log(error);
            return this.res.badRequest(error.message);
        }
    }
}