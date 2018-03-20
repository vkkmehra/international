module.exports = {        
    getInternationalisation: function(req, res){
        // it does not work even with this
        sails.config.i18n.defaultLocale = "fr";
        // this does not work either
         //var test = sails.__('Welcome','fr');
        
        // this step runs into an error
        var test = sails.__({phrase:'Welcome',locale:'fr'});
        return res.json(test);
    }
}