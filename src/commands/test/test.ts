import { Command } from '../../client';

export default new Command({
    name: 'test',
    description: 'Test command',
    defaultMemberPermissions: ['BanMembers'],
    run: async ({ interaction }) => {
        interaction.followUp('bot is working');
    },
});
