import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/IDateProvider';
import { DayjsDateProvider } from './DateProvider/implementations/DayjsDateProvider';
import { IMailProvider } from './MailProvider/IMailProvider';
import { EtherealMailProvider } from './MailProvider/implementations/EtherealMailProvider';
import { LocalStorageProvider } from './StorageProvader/implementations/LocalStorageProvider';
import { IStorageProvider } from './StorageProvader/IStorageProvader';

container.registerSingleton<IDateProvider>('DateProvider', DayjsDateProvider);

container.registerInstance<IMailProvider>(
  'MailProvider',
  new EtherealMailProvider()
);

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  LocalStorageProvider
);
