import { Sequelize, DataTypes } from 'sequelize';
import MAEPAB1 from './MAEPAB1';
import HCCOM51 from './HCCOM51';
import HCCOM5 from './HCCOM5';
import HCCOM1 from './HCCOM1';
import MAEPRO from './MAEPRO';
import CAPBAS from './CAPBAS';
import INGRESOS from './INGRESOS';
import MAEMED1 from './MAEMED1';
import MAEESP from './MAEESP';
import MAEEMP from './MAEEMP';
import EMPRESS from './EMPRESS';
import TMPFAC from './TMPFAC';

export const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mssql', // Cambia al dialecto que estés utilizando
});

// Inicializar todos los modelos
MAEPAB1.init({
  MPNumC: {
    type: DataTypes.STRING,
  },
  MPCtvIn: {
    type: DataTypes.STRING,
  },
  MPUDoc: {
    type: DataTypes.STRING,
  },
  MPUced: {
    type: DataTypes.STRING,
  },
  MPActCam: {
    type: DataTypes.STRING,
  },
  MPDisp: {
    type: DataTypes.STRING,
  },
  MPCodP: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'MAEPAB1',
  tableName: 'MAEPAB1',
});

HCCOM51.init({
  HISCKEY: {
    type: DataTypes.STRING,
  },
  HCPrcCod: {
    type: DataTypes.STRING,
  },
  MPUDoc: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'HCCOM51',
  tableName: 'HCCOM51',
});

HCCOM5.init({
  // Definición de los campos de HCCOM5
}, {
  sequelize,
  modelName: 'HCCOM5',
  tableName: 'HCCOM5',
});

HCCOM1.init({
  HISCKEY: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'HCCOM1',
  tableName: 'HCCOM1',
});

MAEPRO.init({
  PRCODI: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'MAEPRO',
  tableName: 'MAEPRO',
});

CAPBAS.init({
  MPCedu: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'CAPBAS',
  tableName: 'CAPBAS',
});

INGRESOS.init({
  MPCedu: {
    type: DataTypes.STRING,
  },
  MMCODM: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'INGRESOS',
  tableName: 'INGRESOS',
});

MAEMED1.init({
  MMCODM: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'MAEMED1',
  tableName: 'MAEMED1',
});

MAEESP.init({
  MECodE: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'MAEESP',
  tableName: 'MAEESP',
});

MAEEMP.init({
  MENNIT: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'MAEEMP',
  tableName: 'MAEEMP',
});

EMPRESS.init({
  MENNIT: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'EMPRESS',
  tableName: 'EMPRESS',
});

TMPFAC.init({
  // Definición de los campos de TMPFAC
}, {
  sequelize,
  modelName: 'TMPFAC',
  tableName: 'TMPFAC',
});

// Relaciones
MAEPAB1.hasMany(HCCOM51, { foreignKey: 'MPUDoc', sourceKey: 'MPUDoc' });
HCCOM51.belongsTo(MAEPAB1, { foreignKey: 'MPUDoc', targetKey: 'MPUDoc' });

HCCOM51.belongsTo(HCCOM1, { foreignKey: 'HISCKEY', targetKey: 'HISCKEY' });
HCCOM51.belongsTo(MAEPRO, { foreignKey: 'HCPrcCod', targetKey: 'PRCODI' });

HCCOM1.belongsTo(CAPBAS, { foreignKey: 'HISCKEY', targetKey: 'MPCedu' });
HCCOM1.belongsTo(INGRESOS, { foreignKey: 'HISCKEY', targetKey: 'MPCedu' });

INGRESOS.belongsTo(MAEMED1, { foreignKey: 'MMCODM', targetKey: 'MMCODM' });
MAEMED1.belongsTo(MAEESP, { foreignKey: 'MMESPC', targetKey: 'MECodE' });

MAEEMP.hasMany(EMPRESS, { foreignKey: 'MENNIT', sourceKey: 'MENNIT' });
EMPRESS.belongsTo(MAEEMP, { foreignKey: 'MENNIT', targetKey: 'MENNIT' });

// Exportar la instancia de sequelize
export default sequelize;
