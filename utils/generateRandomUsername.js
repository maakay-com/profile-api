
const generateRandomUsername = () => {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = 6;
    for ( var i = 0; i < charactersLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 26));
   }
   return result;
}

module.exports = generateRandomUsername;

