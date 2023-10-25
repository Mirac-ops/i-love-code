const validator = ('express-validator');

const passwordConfirmationMethod = (value, { req }) =>
{
    if(value !== req.body.password)
    {
        
        throw new Error('Fehler: Passwort nicht gleich');
    }
    return true;
}

module.exports = passwordConfirmationMethod;