module.exports = {
	name: 'pausar',
	description: 'Pause command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ Pausei a música para você!');
		}
		return message.channel.send('Não tem nada tocando!.');
	}
};
