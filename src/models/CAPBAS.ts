import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class CAPBAS extends Model {}

CAPBAS.init({
  MPCedu: {
    type: DataTypes.STRING,
  },
  MPNOMC: {
    type: DataTypes.STRING,
  },
  MPFechaNac: {
    type: DataTypes.DATE,
  },
  MPSexo: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'CAPBAS',
  tableName: 'CAPBAS',
});

export default CAPBAS;
