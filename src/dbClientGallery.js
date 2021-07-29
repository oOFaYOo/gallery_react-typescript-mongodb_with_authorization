const mongoose = require('mongoose');


const User = mongoose.model("user", {
    username: {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})

class DbClientGallery {

    _dbPath = "mongodb://127.0.0.1:27017/galleryapp";

    start = () => {
        mongoose.connect(this._dbPath);
    }

    addUser = async (login, password) => {
        await new User({username:login, password:password}).save();
        console.log("Пользователь сохранен");
    }

    checkUser = (login, password) => {
        return new Promise((resolve, reject) => {
            User.findOne({username: login, password: password}, (err, user) => {
                if (err) {
                    reject(err);
                    return;
                }
                else if (!user) {
                    reject(new Error(`User ${login} is not found`));
                    return;
                }

                resolve();
            });
        });
    }
}


exports.DbClientGallery = DbClientGallery;