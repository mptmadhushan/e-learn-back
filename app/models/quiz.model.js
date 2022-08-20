module.exports = (sequelize, DataTypes) => {
  const quiz = sequelize.define("quiz", {
    quiz: {
      type: DataTypes.STRING,
    },
    answers: {
      type: DataTypes.STRING,
    },
  });

  return quiz;
};
