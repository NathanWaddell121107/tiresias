export default {
    Query: {
      users: (obj, args) => {
        return getUsersActivity(args.offset, args.limit, args.filter)
      },
      user: (obj, args) => {
        return getUserActivity(args.where)
      },
    },
    Mutation: {
      createUser: (obj, args, context) => {
        return createUserActivity(args.data)
      },
      updateUser: (obj, args, context) => {
        const { _id, ...data } = args.data
        return updateUserActivity({ _id }, data)
      },
      deleteUser: (obj, args, context) => {
        return deleteUserActivity({ _id: args.data._id })
      },
    },
  }