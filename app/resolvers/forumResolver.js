export default function forumResolver(options) {
  const virgilio = this
  const forumResolver = virgilio.namespace$('forumResolver')

  
  forumResolver.resolver = function forumResolver() {
    return {
      Query: {
        post: async (root, { _id }) => {
          return {}
        },
        posts: async () => {
          return {}
        }
      },
      Post: {
        comments: async ({ _id }) => {
          return true
        }
      },
      Mutation: {
        createPost: async (root, args, context, info) => {
          return true
        }
      }
    }
  }


}
