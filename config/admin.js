module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '457c2d2d9aea9f9f33f9f013af672c6d'),
  },
});
