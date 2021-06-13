const countValidator = ({target, limit}) => target.length > 0 && limit - target.length ? true : false
export default countValidator
