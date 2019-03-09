
exports.index = function(req, res){
  // var array = new Array();
  if (!req.session.languages) {
    req.session.languages = "id";
  } else {
    req.session.languages
  }

  var content = {
    title : "Pixo Destya Fandy",
    status : "Curiculum Vitae",
    aka : "Destyand",
    lang : req.session.languages,
    meta_desc : "Pixo Destya Fandy Curiculum Vitae",
    meta_keyword : "Pixo Destya Fandy, Pixo, Curiculum Vitae, resume, cv, portfolio, personal, developer, web, php, personal resume,",
    facebook : "https://www.facebook.com/Pixo.Destya.Fandy",
    twitter : "https://twitter.com/pikodestyafandy",
    instagram : "https://www.instagram.com/pikodestyafandy/",
    linkedin : "https://www.linkedin.com/in/piko-destya-fandy-9b45b2a4/",
    breadcrumb : [{ val: "", url:""}],
  }
  // console.log(content);
  res.render("index", content);
}

exports.select_lang = function(req, res){
  var lang_type = req.body.lang_type;

  if (lang_type !== "" || lang_type != null) {
    req.session.languages = lang_type;
  } else {
    req.session.languages = "id";
  }
  res.json({session: req.session.languages});
}

