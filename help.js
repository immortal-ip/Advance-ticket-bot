
const { ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Shows help menu with dropdown',
    execute(message, args) {
        const embed = new EmbedBuilder()
            .setTitle('Advanced Ticket Bot Help')
            .setDescription('Select a category from the dropdown below.')
            .setColor(0x00AE86)
            .setFooter({ text: 'Made by Akshay' });

        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('help-menu')
                    .setPlaceholder('Choose a category')
                    .addOptions([
                        { label: 'Ticket Commands', value: 'ticket', emoji: '🎟️' },
                        { label: 'Admin Commands', value: 'admin', emoji: '🛠️' },
                        { label: 'Info', value: 'info', emoji: 'ℹ️' }
                    ])
            );

        message.reply({ embeds: [embed], components: [row] });
    }
};
