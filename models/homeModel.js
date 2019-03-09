var mongoose = require('mongoose');

var homeSchema = mongoose.Schema({
    // slide_1: {type: String, required: true},
    // slide_2: {type: String, required: true},
    // slide_3: {type: String, required: true},
    slide_1: {
      home_title_en: {type: String, required: true},
      home_title_id: {type: String, required: true},
      home_desc_en: {type: String, required: true},
      home_desc_id: {type: String, required: true}
    },
    slide_2: {
      home_title_en: {type: String, required: true},
      home_title_id: {type: String, required: true},
      home_desc_en: {type: String, required: true},
      home_desc_id: {type: String, required: true}
    },
    slide_3: {
      home_title_en: {type: String, required: true},
      home_title_id: {type: String, required: true},
      home_desc_en: {type: String, required: true},
      home_desc_id: {type: String, required: true}
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('homes', homeSchema);
