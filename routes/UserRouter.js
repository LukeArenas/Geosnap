const Router = require('express').Router()
const controller = require('../controllers/UserController')
const multer = require('multer') //
const storage = multer.memoryStorage() //stores on server memory (RAM)
const upload = multer({ storage })

Router.get('/', controller.getAllUsers)
Router.post('/', controller.createUser)
Router.put(
  '/profile/:id',
  upload.single('profilePicture'),
  controller.updateUser
) //protected route //checks that it is a profilePicture and not something else

module.exports = Router
