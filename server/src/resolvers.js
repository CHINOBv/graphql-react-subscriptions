const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    feed: async () => {
      let posts = await prisma.link.findMany();
      return posts;
    },
    getPost: async (root, { id }) => {
      let post = await prisma.link.findOne(id);
      return post;
    }
  },
  Mutation: {
    post: async (root, { url, description }) => {
      let newPost = await prisma.link.create({
        data: {
          url,
          description
        }
      });
      return newPost;
    },
    updatePost:async(root, {id, description, url}) => {
      let newPost = await prisma.link.update({
        where: {
          id
        },
        data:{
          url,
          description,
        }

      });
      return newPost;
    },
  }
}
module.exports = resolvers
