module.exports = {
	name: 'dpausar',
	description: 'Resume command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ música despausada.');
		}
		return message.channel.send('Não tem nenhuma música tocando agora.');
	}
};
