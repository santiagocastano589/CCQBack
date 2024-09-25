import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class HCCOM51 extends Model {}

HCCOM51.init({
  HISCKEY: {
    type: DataTypes.STRING,
  },
  HCPrcCod: {
    type: DataTypes.STRING,
  },
  HISCSEC: {
    type: DataTypes.STRING,
  },
  HisCpObs: {
    type: DataTypes.STRING,
  },
  HisCPCan: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize,
  modelName: 'HCCOM51',
  tableName: 'HCCOM51',
});

export default HCCOM51;
