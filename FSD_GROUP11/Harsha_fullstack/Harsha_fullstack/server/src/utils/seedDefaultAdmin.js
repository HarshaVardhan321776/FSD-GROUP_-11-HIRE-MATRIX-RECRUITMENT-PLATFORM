const bcrypt = require('bcryptjs');
const User = require('../models/User');

const DEFAULT_ADMIN = {
  name: 'Default Admin',
  email: 'hirematrix0@gmail.com',
  password: 'Harsha@123',
};

module.exports = async () => {
  const hashedPassword = await bcrypt.hash(DEFAULT_ADMIN.password, 10);
  const admin = await User.findOneAndUpdate(
    { email: DEFAULT_ADMIN.email },
    {
      name: DEFAULT_ADMIN.name,
      email: DEFAULT_ADMIN.email,
      password: hashedPassword,
      role: 'Admin',
      approvalStatus: 'Approved',
      companyVerified: true,
      isActive: true,
    },
    { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true },
  );

  if (admin) {
    console.log('Default admin account is ready.');
  }
};
