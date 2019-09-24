const getParameter = param => param.split ( '=' )

const getParameterFromString = (parameters, param, index) => {
    let paramArray = getParameter(param)
    const name = paramArray[0]
    const value = paramArray[1] || name
    parameters[name] = value
    parameters[index] = {
        name,
        value,
    }
    return parameters
}

const generateCliParameters = () => process.argv
    .slice(2)
    .reduce(getParameterFromString, [])


exports.get = generateCliParameters
