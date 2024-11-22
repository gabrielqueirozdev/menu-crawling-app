import Joi from 'joi'
import validate from '@middlewares/validate'

const schema = Joi.object().keys({
  urls: Joi.array().required().min(1)
});

export default validate(schema)