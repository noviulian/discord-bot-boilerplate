import { ExtendedClient } from '../client';
import { Event } from '../client';
import 'colors';

export default new Event('ready', async (client: ExtendedClient) => {
    console.log(`${client.user.username}#${client.user.discriminator} is online and ready`.green.bold);
});
