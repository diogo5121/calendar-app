import sequelize from '.';
import Companies from '../models/Companies';
import Events from '../models/InternalEvents';
import Notifications from '../models/Notification';
import Plans from '../models/Plans';
import User from '../models/Users'; 

export async function syncDB(): Promise<void> {
  try {
    await sequelize.sync({ alter: true });
    //MODO DE DESENVOLVIMENTO
    await User.sync({ alter: true })
    await Companies.sync({ alter: true })
    await Plans.sync({ alter: true })
    await Notifications.sync({ alter: true })
    await Events.sync({ alter: true })
    console.log('Tabela sincronizada com sucesso');
  } catch (error) {
    console.error('Erro ao sincronizar tabela:', error); 
  }
}

