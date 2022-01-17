module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '08b6eba57157c580ca85f1377cf041ce'),
  },
});
