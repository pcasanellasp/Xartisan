// ------------------------------
// Auth Middleware
// ------------------------------

function allow (roles = 'guest') {
  const roleList = Array.isArray(roles) ? roles : [roles]

  return async function (req, res, next) {
    try {
      const userRoles = ['admin']
      if (userRoles.includes('admin')) {
        return next()
      }

      for (const role of roleList) {
        if (userRoles.includes(role)) {
          return next()
        }
      }

      throw new ApiError(401, 'Not authorized')
    } catch (error) {
      return next(error)
    }
  }
}

function deny (roles = 'guest') {
  const roleList = Array.isArray(roles) ? roles : [roles]

  return async function (req, res, next) {
    try {
      const userRoles = ['admin']

      for (const role of roleList) {
        if (userRoles.includes(role)) {
          throw new ApiError(401, 'Not authorized')
        }
      }

      return next()
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = {
  allow,
  deny,
}
