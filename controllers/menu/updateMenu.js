const Menu = require('../../model/menuItem');
const catchAsyncError = require('../../middlewares/catchAsyncError');
const SuccessHandler = require('../../utils/successHandler');
const ErrorHandler = require('../../utils/errorHandler');

const updateMenu = catchAsyncError(async (req, res, next) => {
    try {
        let menu = await Menu.findById(req.params.id);

        let images = [];

        if (req.body.imagesCleared === 'true') {
            images = menu.images;
        }

        let BASE_URL = process.env.BACKEND_URL;
        if (process.env.NODE_ENV === "production") {
            BASE_URL = `${req.protocol}://${req.get('host')}`;
        }

        if (req.files && req.files.length > 0) {
            req.files.forEach(file => {
                let url = `${BASE_URL}/uploads/product/${file.originalname}`;
                images.push({ image: url });
            });
        }

        req.body.images = images;

        if (!menu) {
            return next(new ErrorHandler('Menu not found', 404));
        }

        menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        new SuccessHandler('Menu updated successfully', { menu }).sendResponse(res);
    } catch (error) {
        next(new ErrorHandler(error.message, 500));
    }
});

module.exports = updateMenu;
