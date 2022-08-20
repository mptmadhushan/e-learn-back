module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define("course", {
    name: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
  });

  return course;
};
