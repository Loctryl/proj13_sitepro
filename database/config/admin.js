module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b3b0676ed18cf5e171f37db27f950f3'),
  },
});
