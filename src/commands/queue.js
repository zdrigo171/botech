module.exports = {
	name: 'fila',
	description: 'Fila.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nenhuma música tocando.');
		return message.channel.send(`
__**Musicas na fila:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Tocando agora:** ${serverQueue.songs[0].title}
		`);
	}
};
